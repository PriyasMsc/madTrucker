import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckRaceComponent } from './truck-race.component';

describe('TruckRaceComponent', () => {
  let component: TruckRaceComponent;
  let fixture: ComponentFixture<TruckRaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TruckRaceComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
