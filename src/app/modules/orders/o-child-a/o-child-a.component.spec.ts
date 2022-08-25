import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OChildAComponent } from './o-child-a.component';

describe('OChildAComponent', () => {
  let component: OChildAComponent;
  let fixture: ComponentFixture<OChildAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OChildAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OChildAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
