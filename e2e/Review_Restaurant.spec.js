Feature('Review Restaurant');

Scenario('Add Review for first restaurant in list', async ({ I }) => {
  const name = 'E2E Test';
  const review = 'Iam test review feature...';

  I.amOnPage('/');
  I.seeElement('.restaurant_card');
  I.click(locate('.restaurant_card').first());

  I.seeElement('#review-form');
  I.fillField('#review-name', name);
  I.fillField('#review-review', review);
  I.click('#review-form button');
  I.see(name, locate('.review__user .review__info h3').last());
  I.see(review, locate('.review__user .review__info p').last());
});
