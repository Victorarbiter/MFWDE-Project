import CONFIG from '../../globals/config';

const createRestaurantCard = (restaurant) => `
  <a class="list__item restaurant_card" href="#/detail/${restaurant.id}" aria-label="${restaurant.name}">
      <div class="list__image--container">
        <img
          src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}"
          alt="${restaurant.name}"
          crossorigin="anonymous"
          class="list__image"
          loading="lazy"
        />
      </div>
      <div class="list__content">
        <div class="list__data">
          <h2 class="list__title">${restaurant.name}</h2>
          <p class="list__description">
            ${restaurant.description}
          </p>
        </div>
        <div class="list__info">
          <div>
            <h3>Nilai:</h3>
            <span>${restaurant.rating}</span>
          </div>
          <div>
            <h3>Lokasi:</h3>
            <span>${restaurant.city}</span>
          </div>
        </div>
      </div>
    </a>
`;

const createLoader = () => `
  <div class="indicator">
    <div class="loading">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    </div>
    <h2>Memuat..</h2>
  </div>
`;

const createList = (list) => {
  let collections = '';
  list.forEach((item) => {
    collections += `<li>${item.name}</li>`;
  });
  return collections;
};

const createHeroDetail = (restaurant) => `
  <div class="hero__content">
    <div class="hero__rating">
        <img src="icons/favorite.svg" alt="favorite"class="hero__favorite"/>
        <span class="hero__score">${restaurant.rating}</span>
    </div>
    <h2 class="hero__title">
      ${restaurant.name}
    </h2>
    <p class="hero_location">${restaurant.address}, ${restaurant.city}</p>
  </div>
`;

const createDetailBody = (restaurant) => `
  <img src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="${restaurant.name}" class="detail__image">
  <div class="detail__text">
    <ul class="detail__category">
      ${createList(restaurant.categories)}
    </ul>
    <p class="detail__description">${restaurant.description}</p>
    <a class="detail__map" href="https://www.google.com/maps/search/?api=1&query=${restaurant.address},${restaurant.city}" target="_blank" rel="noopener">
    <i class="fa fa-map-marker" aria-hidden="true"></i> Lihat Peta
    </a>
    <div class="detail__menus">
      <ul>
      <div class="detail_icon"><i class="fas fa-utensils"style="color:#161614"></i></div>
        <li>Daftar Makanan</li>
        <ul>
        ${createList(restaurant.menus.foods)}
        </ul>
      </ul>
      <ul>
      <div class="detail_icon"><i class="fas fa-coffee" style="color:#161614"></i></div>
        <li>Daftar Minuman</li>
        <ul>
          ${createList(restaurant.menus.drinks)}
        </ul>
      </ul>
    </div>
    <div class="detail__reviews">
      <h2>Review Pelanggan :</h2>
      <form id="review-form" class="detail__form">
        <input type="text" placeholder="Nama" id="review-name">
        <textarea placeholder="Tulis review anda disini..." id="review-review"></textarea>
        <button type="submit">Tambahkan</button>
      </form>
      <ul>
        ${restaurant.customerReviews.map((review) => (`<li class="review__user">
            <div>
            <span class="avatar">${review.name ? review.name[0] : '-'}</span>
            </div>
            <div class="review__info">
            <h3> ${review.name}</h3>
            <p> ${review.review}</p>
            <time> ${review.date}</time>
            </div>
          </li>`)).join(' ')}
      </ul>
    </div>
  </div>
`;

const createLike = () => `
  <button aria-label="add" id="likeButton" class="favorite">
  <span class="material-icons">favorite_border</span>
  </button>
`;

const createDislike = () => `
  <button aria-label="remove" id="likeButton" class="favorite">
  <span class="material-icons">favorite</span>
  </button>
`;

const createEmpty = () => `
  <div class="indicator">
    <p class="text-center" id="empty-favorite-state">Belum ada nih..pastikan klik tombol hati untuk menyimpan data!<h2>
  </div>
`;

export {
  createRestaurantCard,
  createDetailBody,
  createHeroDetail,
  createLoader,
  createLike,
  createDislike,
  createEmpty,
};
