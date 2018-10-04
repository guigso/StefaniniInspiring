import { Component } from '@angular/core';
import { legends } from '../names/nameslist';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage {
  searchInput: string;
  results = [];

  initializeItems() {
    this.results = legends;
  }
  clearResult() {
    this.results = [];
    this.item = '';
  }
  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();
    var val = ev.target.value;
    if (val === '') { this.clearResult(); }
    this.results = this.results.filter((item) => {
      return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
    });

  }

}
