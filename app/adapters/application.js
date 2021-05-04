import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'tmdb-emberjs-frontend/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = `${ENV.TMDB.BASE_URL}`;

  get headers() {
    return {
      Authorization: `Bearer ${ENV.TMDB.API_KEY}`,
      'Content-Type': 'application/json;charset=utf-8',
    };
  }

  async query(modelName, query, options) {
    let ret = await fetch(
      `${this.buildURL()}/search/movie?query=${options.filter.name}`,
      {
        headers: {
          Authorization: `Bearer ${ENV.TMDB.API_KEY}`,
          'Content-Type': 'application/json;charset=utf-8',
        },
      }
    );
    ret = await ret.json();
    return ret;
  }
  // async query(modelName, query, options) {
  //   let ret = await fetch(
  //     `https://api.themoviedb.org/3/search/movie?api_key=${ENV.TMDB.API_KEY2}&query=${options.filter.name}`
  //   );
  //   ret = await ret.json();
  //   return ret;
  // }

  pathForType() {
    return 'movie/popular';
  }
}
