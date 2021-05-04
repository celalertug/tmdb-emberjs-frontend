import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class MoviesComponent extends Component {
  @service store;
  @tracked query = '';
  @tracked searchResult = null;

  @action onClickedClearButton() {
    this.query = '';
    this.onClickedSearchButton();
  }
  @action onClickedSearchButton() {
    if (!this.query) {
      this.searchResult = null;
      return;
    }
    this.store
      .query('movie', {
        filter: {
          name: this.query,
        },
      })
      .then((res) => {
        this.searchResult = res;
      });
  }
}
