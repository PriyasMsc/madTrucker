import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-truck-race',
  templateUrl: './truck-race.component.html',
  styleUrls: ['./truck-race.component.scss'],
})
export class TruckRaceComponent implements OnInit {
  listOfTruck: any;
  funds = 1000;
  betTruck;
  result = [];
  winnerTruck: boolean;
  winnerTruckId: string;
  playerName: string;
  truckCount: number;
  initialFund: number;
  constructor() {}

  ngOnInit() {
    this.winnerTruck = false;
    this.listOfTruck = [
      {
        truckId: 'truck-1',
        x: 18,
        y: 4,
        color: 'green',
        name: 'Truck 1',
        betAmount: '',
      },
      {
        truckId: 'truck-2',
        x: 18,
        y: 8,
        color: 'dark',
        name: 'Truck 2',
        betAmount: '',
      },
      {
        truckId: 'truck-3',
        x: 18,
        y: 12,
        color: 'blue',
        name: 'Truck 3',
        betAmount: '',
      },
      {
        truckId: 'truck-4',
        x: 18,
        y: 16,
        color: 'purple',
        name: 'Truck 4',
        betAmount: '',
      },
      /* { truckId: 'truck-5', x: 18, y: 20, color: 'yellow' },
      { truckId: 'truck-6', x: 18, y: 24, color: 'pink' },
      { truckId: 'truck-7', x: 18, y: 28, color: 'white' },
      { truckId: 'truck-8', x: 18, y: 32, color: 'brown' }, */
    ];

    console.log(this.listOfTruck);
  }

  startRace(event, truckId) {
    console.log(event);
    event.target.disabled = true;
    this.result = new Array();
    for (let i = 0; i < this.listOfTruck.length; i++) {
      this.runTrace(this.listOfTruck[i].truckId);
    }
  }

  runTrace(elemid) {
    const elem = document.getElementById(elemid);
    const speed = Math.random() * 10 + 10;
    let pos = 0;
    const winnerTruckIdLocal = new Array();
    const id = setInterval(frame, 1000 / speed);
    function frame() {
      if (pos === 70) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.left = pos + 'vw';
      }
      console.log(winnerTruckIdLocal);
    }
  }

  onFormSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.listOfTruck));
  }

  onResetSubmit() {
    console.log('SDsad', this.initialFund, this.truckCount, this.playerName);
    for (let j = 0; j < this.listOfTruck; j++) {}
  }
}
