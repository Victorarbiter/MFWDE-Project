import CONFIG from '../../globals/config';
import Source from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { createDetailBody, createHeroDetail, createLoader } from '../templates/templates-creator';
import FavoriteButton from '../../utils/favorite-button-initiator';
import ReviewInit from '../../utils/review-initiator';
import FavoriteRestaurantIdb from '../../data/favoriteRestaurant-idb';

const Detail = {
  async render() {
    return `
      <div class="hero hero--detail"></div>
      <main id="main">
        <section class="container">
          <div id="api-container"></div>
          <div class="detail" id="restaurant-content"></div>
        </section>
      </main>
      <div id="likeButtonContainer"></div>
    `;
  },
  async afterRender() {
    // fungsi akan dipanggil setelah render
    const restaurantContainer = document.querySelector('#restaurant-content');
    const apiContainer = document.querySelector('#api-container');
    apiContainer.innerHTML = createLoader();
    const hero = document.querySelector('.hero');
    const { id } = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await Source.detail(id);
    apiContainer.innerHTML = '';
    hero.style.backgroundImage = `url('${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}')`;
    hero.innerHTML = createHeroDetail(restaurant);
    restaurantContainer.innerHTML = createDetailBody(restaurant);

    FavoriteButton.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        name: restaurant.name,
        description: restaurant.description,
        rating: restaurant.rating,
        city: restaurant.city,
      },
    });

    ReviewInit.init({
      id,
      name: document.querySelector('#review-name'),
      review: document.querySelector('#review-review'),
      form: document.querySelector('#review-form'),
    });
  },
};

export default Detail;
