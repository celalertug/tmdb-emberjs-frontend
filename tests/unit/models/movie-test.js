import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | movie', function (hooks) {
  setupTest(hooks);

  test('it has the right type', function (assert) {
    let store = this.owner.lookup('service:store');
    let movie = store.createRecord('movie', {
      genre_ids: [14, 28, 12, 878, 53],
      overview:
        "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
      popularity: 6382.461,
      poster_path: '/xGuOF1T3WmPsAcQEQJfnG7Ud9f8.jpg',
      release_date: '2021-04-07',
      title: 'Mortal Kombat',
      vote_average: 7.8,
      vote_count: 2004,
    });
    console.log(movie.image);

    assert.equal(movie.title, 'Mortal Kombat');
    assert.equal(movie.release_date, '2021-04-07');
    assert.equal(movie.release_date, '2021-04-07');
    assert.equal(
      movie.image,
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xGuOF1T3WmPsAcQEQJfnG7Ud9f8.jpg'
    );
  });
});
