import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | movie', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.setProperties({
      movie: {
        genre_ids: [14, 28, 12, 878, 53],
        genres: ['Action'],
        overview:
          "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
        popularity: 6382.461,
        image:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xGuOF1T3WmPsAcQEQJfnG7Ud9f8.jpg',
        release_date: '2021-04-07',
        title: 'Mortal Kombat',
        vote_average: 7.8,
        vote_count: 2004,
      },
    });
  });

  test('it renders movie list item', async function (assert) {
    await render(hbs`<Movie @movie={{this.movie}} />`);

    assert.dom('[data-test-movie-title]').containsText('Mortal Kombat');
    assert.dom('[data-test-movie-release-date]').containsText('2021-04-07');
    assert.dom('[data-test-movie-genres]').containsText('Action');
    assert.dom('[data-test-movie-user-score]').containsText('6382.461');
    assert.dom('[data-test-movie-vote-average]').containsText('7.8');
  });
});
