import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-downup',
  templateUrl: './downup.component.html',
  styleUrls: ['./downup.component.less']
})
export class DownupComponent implements OnInit {
  public method:any=[1,2,3,4,5,6,7,8,9,2]
  constructor() { }

  ngOnInit() {
  }

}
