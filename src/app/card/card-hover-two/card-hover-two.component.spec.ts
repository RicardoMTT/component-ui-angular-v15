import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHoverTwoComponent } from './card-hover-two.component';

describe('CardHoverTwoComponent', () => {
  let component: CardHoverTwoComponent;
  let fixture: ComponentFixture<CardHoverTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHoverTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHoverTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
