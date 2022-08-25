import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-o-grand-parent',
  templateUrl: './o-grand-parent.component.html',
  styleUrls: ['./o-grand-parent.component.scss']
})
export class OGrandParentComponent implements OnInit {

  title = "Order Grand Parent"

  constructor() { }

  ngOnInit(): void {
  }

}
