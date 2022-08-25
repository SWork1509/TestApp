import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-o-child-a',
  templateUrl: './o-child-a.component.html',
  styleUrls: ['./o-child-a.component.scss']
})
export class OChildAComponent implements OnInit {

  title = "Order Child A";

  constructor() { }

  ngOnInit(): void {
  }

}
