const itActsAsFavoriteRestaurantModel = (favoriteRestaurants) => {
  it('should return the restaurant that has been added to favorite restaurant', async () => {
    favoriteRestaurants.putRestaurant({ id: 1 });
    favoriteRestaurants.putRestaurant({ id: 2 });

    expect(await favoriteRestaurants.getRestaurant(1))
      .toEqual({ id: 1 });
    expect(await favoriteRestaurants.getRestaurant(2))
      .toEqual({ id: 2 });
    expect(await favoriteRestaurants.getRestaurant(3))
      .toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have correct property ', async () => {
    favoriteRestaurants.putRestaurant({ aProperty: 'property' });

    expect(await favoriteRestaurants.getAllRestaurants()).toEqual([]);
  });

  it('should can return all restaurants that has been added', async () => {
    favoriteRestaurants.putRestaurant({ id: 1 });
    favoriteRestaurants.putRestaurant({ id: 2 });

    expect(await favoriteRestaurants.getAllRestaurants())
      .toEqual([{ id: 1 }, { id: 2 },]);
  });

  it('should remove favorite restaurant', async () => {
    favoriteRestaurants.putRestaurant({ id: 1 });
    favoriteRestaurants.putRestaurant({ id: 2 });
    favoriteRestaurants.putRestaurant({ id: 3 });

    await favoriteRestaurants.deleteRestaurant(1);

    expect(await favoriteRestaurants.getAllRestaurants())
      .toEqual([{ id: 2 }, { id: 3 },]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteRestaurants.putRestaurant({ id: 1 });
    favoriteRestaurants.putRestaurant({ id: 2 });
    favoriteRestaurants.putRestaurant({ id: 3 });

    await favoriteRestaurants.deleteRestaurant(4);

    expect(await favoriteRestaurants.getAllRestaurants())
      .toEqual([{ id: 1 }, { id: 2 }, { id: 3 },]);
  });
};

export { itActsAsFavoriteRestaurantModel };
