import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckGameComponent } from './truck-game.component';

describe('TruckGameComponent', () => {
  let component: TruckGameComponent;
  let fixture: ComponentFixture<TruckGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
