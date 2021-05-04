import Model, { attr } from '@ember-data/model';

const GENRES = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 36,
    name: 'History',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 10402,
    name: 'Music',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 10770,
    name: 'TV Movie',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    name: 'Western',
  },
];

export default class MovieModel extends Model {
  @attr('number') popularity;
  @attr('number') vote_count;
  @attr('string') poster_path;
  @attr genre_ids;
  @attr('string') title;
  @attr('number') vote_average;
  @attr('string') overview;
  @attr release_date;

  get image() {
    return `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${this.poster_path}`;
  }
  get genres() {
    const findNameById = (id) => GENRES.find((i) => i.id === id).name;
    return this.genre_ids.map((i) => findNameById(i));
  }
}
