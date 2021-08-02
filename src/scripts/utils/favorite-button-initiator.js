import { createLike, createDislike } from '../views/templates/templates-creator';

const FavoriteButton = {
  async init({ likeButtonContainer, favoriteRestaurants, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._favoriteRestaurants = favoriteRestaurants;
    this._restaurant = restaurant;

    await this._renderButton();
  },
  async _renderButton() {
    const { id } = this._restaurant;
    if (await this._isFavorite(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },
  async _isFavorite(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },
  _renderLike() {
    this._likeButtonContainer.innerHTML = createLike();
    const favoriteButton = document.querySelector('#likeButton');
    favoriteButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },
  _renderLiked() {
    this._likeButtonContainer.innerHTML = createDislike();
    const favoriteButton = document.querySelector('#likeButton');
    favoriteButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavoriteButton;
