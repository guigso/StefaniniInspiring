import { Component } from '@angular/core';
import { legends } from '../names/nameslist';

@Component({
  selector: 'app-edit',
  templateUrl: 'edit.page.html',
  styleUrls: ['edit.page.scss']
})
export class EditPage {
  legends: Array<string> = legends;
  constructor() {

  }
  reorderItems(ev) {
    let itemToMove = this.legends.splice(ev.detail.from, 1)[0];
    this.legends.splice(ev.details.to,0,itemToMove);
  }
  save(){
    console.log(this.legends);
  }
}


