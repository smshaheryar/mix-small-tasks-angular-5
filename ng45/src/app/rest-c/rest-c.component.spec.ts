import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestCComponent } from './rest-c.component';

describe('RestCComponent', () => {
  let component: RestCComponent;
  let fixture: ComponentFixture<RestCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
