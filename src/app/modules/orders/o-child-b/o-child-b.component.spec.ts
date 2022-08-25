import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OChildBComponent } from './o-child-b.component';

describe('OChildBComponent', () => {
  let component: OChildBComponent;
  let fixture: ComponentFixture<OChildBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OChildBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OChildBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
