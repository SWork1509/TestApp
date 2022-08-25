import { Component, OnInit } from '@angular/core';
import { confirmable } from 'src/app/decorators/confirmable.decorator';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Creating Custom Decorator
  @confirmable({ title: 'Are you sure', html: 'Do you want to delete this item?', icon: 'warning' })
  deleteItem(): void {
    console.log("An item was deleted");
  }

}
