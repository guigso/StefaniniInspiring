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

}


