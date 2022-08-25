import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

interface IData {
  name: string;
  message: string;
  age: number;
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit, AfterViewInit {

  @ViewChild('parentTemplate') myTemp: TemplateRef<HTMLElement>;

  @ViewChild('listTemplate') listTemplate: TemplateRef<HTMLElement>;
  @ViewChild('cardTemplate') cardTemplate: TemplateRef<HTMLElement>;


  dataArr: IData[] = [];
  modes: string[] = ['Card', 'List']
  items = [
    {
      header: 'Angular Tutorial',
      content: 'The Angular Tutorial for Beginners & Professionals'
    },
    {
      header: 'Typescript Tutorial',
      content: 'The Complete Guide to Typescript'
    },
    {
      header: 'Entity Framework Code Tutorial',
      content: 'Learn Everything about Entity Framework Core'
    },
  ];
  currentTemplate: any;

  constructor() { }

  ngOnInit(): void {
    this.createDataArr();
  }

  ngAfterViewInit(): void {
    console.log(this.myTemp.elementRef);
  }

  selectionChange(evt: MatSelectChange) {
    console.log(evt.value)
    this.currentTemplate = evt.value === 'List' ? this.listTemplate : this.cardTemplate
    console.log(this.currentTemplate)
  }

  private createDataArr(): void {
    for (let i = 1; i <= 3; i++) {
      this.dataArr.push({
        name: `A${i}`,
        message: `M${i}`,
        age: +`${i}`
      })
    }
  }

}
