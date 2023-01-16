import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBiryaniComponent } from './category-biryani.component';

describe('CategoryBiryaniComponent', () => {
  let component: CategoryBiryaniComponent;
  let fixture: ComponentFixture<CategoryBiryaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryBiryaniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryBiryaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
