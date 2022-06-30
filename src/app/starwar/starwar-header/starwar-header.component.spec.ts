import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarwarHeaderComponent } from './starwar-header.component';

describe('StarwarHeaderComponent', () => {
  let component: StarwarHeaderComponent;
  let fixture: ComponentFixture<StarwarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarwarHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarwarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
