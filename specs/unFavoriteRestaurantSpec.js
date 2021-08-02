import FavoriteRestaurantIdb from '../src/scripts/data/favoriteRestaurant-idb';
import * as TestFactories from './helpers/testFactories';

const addFavoriteButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Remove Favorite Restaurant', () => {
  beforeEach(async () => {
    addFavoriteButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should show the unFavorite restaurant button when the restaurant already add to favorite', async () => {
    await TestFactories.createFavoriteButton({ id: 1 });
    expect(document.querySelector('[aria-label="remove"]'))
      .toBeTruthy();
  });

  it('should not show the Favorite restaurant button when the restaurant already add to favorite', async () => {
    await TestFactories.createFavoriteButton({ id: 1 });
    expect(document.querySelector('[aria-label="add"]'))
      .toBeFalsy();
  });

  it('should able to remove restaurant from favorite restaurant', async () => {
    await TestFactories.createFavoriteButton({ id: 1 });
    document.querySelector('[aria-label="remove"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unFavorite restaurant is not in favorite restaurant', async () => {
    await TestFactories.createFavoriteButton({ id: 1 });
    await FavoriteRestaurantIdb.deleteRestaurant(1);

    document.querySelector('[aria-label="remove"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
