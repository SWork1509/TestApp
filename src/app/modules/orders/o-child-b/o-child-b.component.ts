import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-o-child-b',
  templateUrl: './o-child-b.component.html',
  styleUrls: ['./o-child-b.component.scss']
})
export class OChildBComponent implements OnInit {

  title = "Order Child B"

  constructor() { }

  ngOnInit(): void {
  }

}
