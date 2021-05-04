import { module, test } from 'qunit';
import { click, find, visit, currentURL, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | tmdb movies', function (hooks) {
  setupApplicationTest(hooks);

  test('transition to index to movies route', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/movies');
  });

  test('search a movie', async function (assert) {
    const store = this.owner.lookup('service:store');
    store.query = async function () {
      return [
        {
          adult: false,
          backdrop_path: null,
          genre_ids: [14, 28, 12],
          id: 425847,
          original_language: 'tr',
          original_title: "Kara Murat: Fatih'in Fermanı",
          overview: 'Turkish action movie',
          popularity: 2.238,
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iH8O8ahYUE3nwmCchId77YVUnpz.jpg',
          release_date: '1973-11-01',
          title: "Karamurat: The Sultan's Warrior",
          video: false,
          vote_average: 6,
          vote_count: 6,
        },
        {
          adult: false,
          backdrop_path: null,
          genre_ids: [28],
          id: 453100,
          original_language: 'tr',
          original_title: 'Kara Murat: Ölüm Emri',
          overview: '',
          popularity: 2.301,
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/m3vd3kk9xwjC3uVMorbJKEYFYuC.jpg',
          release_date: '1974-10-01',
          title: 'Kara Murat: Ölüm Emri',
          video: false,
          vote_average: 5.5,
          vote_count: 6,
        },
      ];
    };
    store.findAll = async function () {
      return [
        {
          adult: false,
          backdrop_path: null,
          genre_ids: [14, 28, 12],
          id: 425847,
          original_language: 'tr',
          original_title: 'Mortal Combat',
          overview: 'Turkish action movie',
          popularity: 2.238,
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iH8O8ahYUE3nwmCchId77YVUnpz.jpg',
          release_date: '1973-11-01',
          title: 'Mortal Combat',
          video: false,
          vote_average: 6,
          vote_count: 6,
        },
      ];
    };

    await visit('/');
    assert.equal(currentURL(), '/movies');

    //search "kara murat"
    await fillIn('input.light', 'kara murat');
    await click('[data-test-search]');

    assert.dom('[data-test-movie-title]').includesText('Karamurat');

    //clear search and list popular movies
    await click('[data-test-clear]');

    assert.dom('[data-test-movie-title]').includesText('Mortal Combat');

    // await this.pauseTest();
  });
});
