import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-o-parent',
  templateUrl: './o-parent.component.html',
  styleUrls: ['./o-parent.component.scss']
})
export class OParentComponent implements OnInit {

  title = "Order Parent"

  constructor() { }

  ngOnInit(): void {
  }

}
