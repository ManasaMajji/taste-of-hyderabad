import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatogoryBiryaniSubComponent } from './catogory-biryani-sub.component';

describe('CatogoryBiryaniSubComponent', () => {
  let component: CatogoryBiryaniSubComponent;
  let fixture: ComponentFixture<CatogoryBiryaniSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatogoryBiryaniSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatogoryBiryaniSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
