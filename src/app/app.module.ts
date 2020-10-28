import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TruckRaceComponent } from './truck-race/truck-race.component';
import { TruckGameComponent } from './truck-game/truck-game.component';

@NgModule({
  declarations: [AppComponent, TruckRaceComponent, TruckGameComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
