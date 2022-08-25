import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OParentComponent } from './o-parent.component';

describe('OParentComponent', () => {
  let component: OParentComponent;
  let fixture: ComponentFixture<OParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
