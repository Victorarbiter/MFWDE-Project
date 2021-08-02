const assert = require('assert');

Feature('Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
  I.see('Belum ada nih..pastikan klik tombol hati untuk menyimpan data!', '#empty-favorite-state');
});

Scenario('Add Restaurant to Favorite restaurant list', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant_card');
  const firstRestaurantName = await I.grabTextFrom(locate('.restaurant_card .list__title').first());
  I.click(locate('.restaurant_card').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant_card');
  const favoriteRestaurantName = await I.grabTextFrom('.restaurant_card .list__title');
  assert.strictEqual(firstRestaurantName, favoriteRestaurantName);
});

Scenario('add then Remove Restaurant from Favorite restaurant list', ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant_card');
  I.click(locate('.restaurant_card').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant_card');
  I.click('.restaurant_card');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Belum ada nih..pastikan klik tombol hati untuk menyimpan data!', '#empty-favorite-state');
});
