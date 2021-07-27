import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePathComponent } from './home-path.component';

describe('HomePathComponent', () => {
  let component: HomePathComponent;
  let fixture: ComponentFixture<HomePathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
