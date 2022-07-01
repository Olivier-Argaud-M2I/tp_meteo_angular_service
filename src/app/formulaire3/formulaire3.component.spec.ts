import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulaire3Component } from './formulaire3.component';

describe('Formulaire3Component', () => {
  let component: Formulaire3Component;
  let fixture: ComponentFixture<Formulaire3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formulaire3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formulaire3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
