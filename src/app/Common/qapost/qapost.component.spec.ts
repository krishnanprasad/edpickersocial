import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QapostComponent } from './qapost.component';

describe('QapostComponent', () => {
  let component: QapostComponent;
  let fixture: ComponentFixture<QapostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QapostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QapostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
