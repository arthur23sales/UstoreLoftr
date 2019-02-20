import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGoblinsComponent } from './home-goblins.component';

describe('HomeGoblinsComponent', () => {
  let component: HomeGoblinsComponent;
  let fixture: ComponentFixture<HomeGoblinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeGoblinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGoblinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
