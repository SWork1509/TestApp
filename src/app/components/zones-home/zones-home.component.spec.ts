import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonesHomeComponent } from './zones-home.component';

describe('ZonesHomeComponent', () => {
  let component: ZonesHomeComponent;
  let fixture: ComponentFixture<ZonesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonesHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
