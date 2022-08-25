import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-customers-home',
  templateUrl: './customers-home.component.html',
  styleUrls: ['./customers-home.component.scss']
})

export class CustomersHomeComponent implements OnInit {

  @Input() parentTemplate: TemplateRef<HTMLElement>;

  constructor() { }

  ngOnInit(): void {
  }




}
