import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovdetailsComponent } from './movdetails.component';

describe('MovdetailsComponent', () => {
  let component: MovdetailsComponent;
  let fixture: ComponentFixture<MovdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
