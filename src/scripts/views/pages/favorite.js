import FavoriteRestaurantIdb from '../../data/favoriteRestaurant-idb';
import { createEmpty, createLoader, createRestaurantCard } from '../templates/templates-creator';

const Favorite = {
  render() {
    return `
      <div class="hero hero--detail">
        <div class="hero__content">
          <h2 class="hero__title">
            Favorit
          </h2>
          <p class="hero__location">Daftar Restoran Favorit Kamu</p>
        </div>
      </div>
      <main id="main">
        <section class="container">
          <div id="api-container"></div>
          <div class="list" id="restaurant-content"></div>
        </section>
      </main>
    `;
  },
  async afterRender() {
    const restaurantContainer = document.querySelector('#restaurant-content');
    const apiContainer = document.querySelector('#api-container');
    apiContainer.innerHTML = createLoader();
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    apiContainer.innerHTML = '';
    if (restaurants.length === 0) apiContainer.innerHTML = createEmpty();
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantCard(restaurant);
    });
  },
};

export default Favorite;
