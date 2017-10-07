import { Component, OnInit } from '@angular/core';
import { StaticStrings } from '../../statics/static-strings';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent{
  private strings = StaticStrings;

}
