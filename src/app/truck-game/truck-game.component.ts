import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Trucks } from '../truck-race/module/truck-race/truck-race.model';
@Component({
  selector: 'app-truck-game',
  templateUrl: './truck-game.component.html',
  styleUrls: ['./truck-game.component.scss'],
})
export class TruckGameComponent implements OnInit {
  @ViewChild('modalBox', { static: true }) modalBox: ElementRef;

  defaultFund = 1000;
  truckCount = 4;
  betTruck: any;
  winTruck: any;
  updatedFund: number;
  sumFund: number;
  isVisible = true;
  placeBetModal = false;
  setupModel = false;
  listOfTruckCount = [];
  playerName = 'Priya';
  constructor() {}
  public listOfTruck: Trucks[] = [
    new Trucks('truck-1', 1, 8, 'green', 'Truck 1', 0),
    new Trucks('truck-2', 1, 8, 'dark', 'Truck 2', 0),
    new Trucks('truck-3', 1, 8, 'blue', 'Truck 3', 0),
    new Trucks('truck-4', 1, 8, 'purple', 'Truck 4', 0),
    new Trucks('truck-5', 1, 8, 'yellow', 'Truck 5', 0),
    new Trucks('truck-6', 1, 8, 'pink', 'Truck 6', 0),
    new Trucks('truck-7', 1, 8, 'white', 'Truck 7', 0),
    new Trucks('truck-8', 1, 8, 'brown', 'Truck 8', 0),
  ];

  result = [];

  ngOnInit() {
    this.listOfTruckCount = this.listOfTruck.slice(0, this.truckCount);
    //  console.log(this.listOfTruck.length);
  }

  placeBet() {
    console.log('placeBet');
    this.result = [];
    for (const value of this.listOfTruckCount) {
      value.betAmount = 0;
    }
    this.placeBetModal = true;
    this.setupModel = false;
    console.log(this.listOfTruckCount);
  }
  setUp() {
    this.result = [];
    for (const value of this.listOfTruckCount) {
      value.betAmount = 0;
    }
    if (this.defaultFund !== 0 && this.defaultFund <= 1000) {
      alert('You already have fund!!!');
    } else {
      this.setupModel = true;
    }
    this.placeBetModal = false;
  }
  startRace(event) {
    event.target.disabled = true;
    const betArray = new Array();
    this.betTruck = new Array();
    for (const value of this.listOfTruckCount) {
      if (value.betAmount !== 0) {
        const truckName = value.name.replace(
          /[\D]/g,
          ''
        ); /*Number of trucks, number will be 1 to 8*/
        this.betTruck.push({
          truckName,
          betAmount: value.betAmount,
        });
        betArray.push(value.betAmount);
        this.sumFund = betArray.reduce((a, b) => {
          return a + b;
        }, 0);
      }
    }
    console.log(this.betTruck);
    if (this.sumFund !== undefined && this.defaultFund >= this.sumFund) {
      this.defaultFund = this.defaultFund - this.sumFund;
      for (const value of this.listOfTruckCount) {
        this.runTrucks(value);
      }
    } else if (this.defaultFund < this.sumFund) {
      alert('Not enough funds. Please reset the Game');
      const startRace = document.getElementById(
        'startRace'
      ) as HTMLInputElement; /*HTML element of the truck*/
      startRace.disabled = false;
      const reset = document.getElementById(
        'reset'
      ) as HTMLInputElement; /*HTML element of the truck*/
      reset.disabled = false;
    } else if (this.sumFund === undefined) {
      alert('Please place a bet amount');
      const startRace = document.getElementById(
        'startRace'
      ) as HTMLInputElement; /*HTML element of the truck*/
      startRace.disabled = false;
    }
  }

  runTrucks(listOfTruck) {
    const element = document.getElementById(
      listOfTruck.truckId
    ) as HTMLInputElement; /*HTML element of the truck*/
    const speed =
      Math.random() * 10 +
      10; /*Initiate a random speed for each horse, the greater speed, the faster horse. The value is between 10 and 20*/
    const originX = listOfTruck.x; /*Original X position*/
    const originY = listOfTruck.y; /*Original Y position*/
    const x = listOfTruck.x; /*Current X*/
    const y = listOfTruck.y; /*Current Y*/
    const truckName = listOfTruck.name.replace(
      /[\D]/g,
      ''
    ); /*Number of trucks, number will be 1 to 8*/
    const arrive = () => {
      const startRace = document.getElementById(
        'startRace'
      ) as HTMLInputElement; /*HTML element of the truck*/

      startRace.disabled = false;
      this.result.push(truckName);
      console.log(this.result);
      // const winTruck = this.betTruck.truckName.includes(this.result[0]);
      const winTruck = this.betTruck.filter((obj) => {
        // console.log(obj.truckName, this.result[0]);
        if (obj.truckName === this.result[0]) {
          return obj;
        }
      });
      console.log(winTruck);
      console.log(
        this.result.length === 1 &&
          winTruck.length > 0 &&
          this.result[0] === winTruck[0].truckName
      );
      if (
        this.result.length === 1 &&
        winTruck.length > 0 &&
        this.result[0] === winTruck[0].truckName
      ) {
        alert('Congrats you Won $' + winTruck[0].betAmount * 2);
        this.defaultFund = this.defaultFund + winTruck[0].betAmount * 2;
      } else if (this.result.length === 1 && winTruck.length === 0) {
        alert(' Sorry You loss $' + this.sumFund);
        // this.updatedFund = this.defaultFund - this.betTruck[0].betAmount;
        console.log(this.betTruck, this.defaultFund);
      }
      /*   if (this.result.length >= 1) {
        alert(' Sorry Your truck didnt met the endpoint');
        this.updatedFund = this.defaultFund - winTruck[0].betAmount;
        console.log(winTruck[0], this.updatedFund);
      } */
    };
    const moveRight = () => {
      // console.log(listOfTruck.x, originX);
      setTimeout(() => {
        listOfTruck.x++;
        if (listOfTruck.x < 67) {
          element.style.left = listOfTruck.x + 'vw';
          moveRight();
        } else if (listOfTruck.x === 67) {
          arrive();
        } else if (listOfTruck.x >= 67) {
          this.result = [];
          listOfTruck.x = 1;
          element.style.left = listOfTruck.x + 'vw';
          moveRight();
        }
      }, 1000 / speed);
      /*      const id = setInterval(frame, 1000 / speed);
      console.log(listOfTruck.x);
      function frame() {
        if (listOfTruck.x === 70) {
          console.log('if', listOfTruck.x);
          arrive();
          clearInterval(id);
        } else if (listOfTruck.x >= 70) {
          console.log('else if', listOfTruck.x);

          arrive();
        } else {
          console.log('else', listOfTruck.x);

          listOfTruck.x++;
          element.style.left = listOfTruck.x + 'vw';
        }
      } */
    };
    moveRight();
  }

  onFormSubmit(FormData) {
    console.log(FormData.valid);
    if (FormData) {
      this.isVisible = false;
    }
    this.listOfTruckCount = this.listOfTruck.slice(0, this.truckCount);
    console.log(this.truckCount);
    for (const value of this.listOfTruckCount) {
      console.log(value.truckId);
      const element = document.getElementById(
        value.truckId
      ) as HTMLInputElement; /*HTML element of the truck*/
      value.x = 1;
      //  element.style.left = value.x + 'vw';
    }
    this.modalBox.nativeElement.click();
  }
}
