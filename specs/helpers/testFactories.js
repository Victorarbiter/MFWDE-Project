import FavoriteButton from '../../src/scripts/utils/favorite-button-initiator';
import FavoriteRestaurantIdb from '../../src/scripts/data/favoriteRestaurant-idb';

const createFavoriteButton = async (restaurant) => {
  await FavoriteButton.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { createFavoriteButton };