import FavoriteRestaurantIdb from '../src/scripts/data/favoriteRestaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Add Favorite Restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addFavoriteButtonContainer();
  });

  it('should show the favorite restaurant button when the restaurant never add to favorite', async () => {
    await TestFactories.createFavoriteButton({ id: 1 });
    expect(document.querySelector('[aria-label="add"]')).toBeTruthy();
  });

  it('should not show the unFavorite restaurant button when the restaurant never add to favorite', async () => {
    await TestFactories.createFavoriteButton({ id: 1 });
    expect(document.querySelector('[aria-label="remove"]')).toBeFalsy();
  });

  it('should able to add restaurant to favorite', async () => {
    await TestFactories.createFavoriteButton({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });
    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add restaurant again when it already added to favorite', async () => {
    await TestFactories.createFavoriteButton({ id: 1 });
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);
    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add restaurant when it has no id', async () => {
    await TestFactories.createFavoriteButton({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
