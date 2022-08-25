import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OGrandParentComponent } from './o-grand-parent.component';

describe('OGrandParentComponent', () => {
  let component: OGrandParentComponent;
  let fixture: ComponentFixture<OGrandParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OGrandParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OGrandParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
