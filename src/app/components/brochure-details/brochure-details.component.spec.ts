import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrochureDetailsComponent } from './brochure-details.component';

describe('BrochureDetailsComponent', () => {
  let component: BrochureDetailsComponent;
  let fixture: ComponentFixture<BrochureDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrochureDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrochureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
