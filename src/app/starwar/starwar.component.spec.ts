import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarwarComponent } from './starwar.component';

describe('StarwarComponent', () => {
  let component: StarwarComponent;
  let fixture: ComponentFixture<StarwarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarwarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarwarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
