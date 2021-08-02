import Source from '../../data/restaurant-source';
import { createLoader, createRestaurantCard } from '../templates/templates-creator';

const Home = {
  async render() {
    return `
    <div class="blur"></div>
    <div id="home" class="hero" loading="lazy">
      <div class="hero__content">
        <h1 data-text="dari mata">
        DARI MATA
        </h1>
        <p class="hero__title">
          turun ke hati, kalau kamu lapar ayo mampir ke sini!
        </p>
        <a href="#main" class="hero__button">MAU DONG</a>
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
    const restaurants = await Source.list();
    apiContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantCard(restaurant);
    });
  },
};

export default Home;
