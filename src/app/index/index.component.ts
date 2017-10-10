import { Component, OnInit } from '@angular/core';
import { StaticStrings } from '../../statics/static-strings';
import {Http} from '@angular/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent{
  private strings = StaticStrings;
  data;
  constructor(private http: Http) {
    this.http.get('app/data_files/users.json')
      .subscribe(res => this.data = res.json());
    console.log(this.data);
  }

}
