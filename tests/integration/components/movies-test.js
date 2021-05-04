import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | movies', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.setProperties({
      movies: [
        {
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
        {
          genre_ids: [14, 28, 12, 878, 53],
          genres: ['Action'],
          overview:
            "Byzantine Prince kills Kara Murat's father and kidnaps his brother to raise him as the Black Knight to fight against Turks. Years later, Kara Murat has to face the notorious enemy in a mission to save abducted Karaca Pasha of Rumelia.",
          popularity: 6382.461,
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2//jaCyeWP91y2gw5juufjWRHFIZh8.jpg',
          release_date: '1978-04-07',
          title: 'Kara Murat',
          vote_average: 9.9,
          vote_count: 2004,
        },
      ],
    });
  });

  test('it renders movies list', async function (assert) {
    await render(hbs`<Movies @movies={{this.movies}} />`);
    // await this.pauseTest();

    assert.dom('[data-test-movies-list-item]').exists({ count: 2 });
    assert.dom('.search span').containsText('Search a movie');
  });
});
