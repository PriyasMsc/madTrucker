import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TruckRaceComponent } from './truck-race/truck-race.component';
import { TruckGameComponent } from './truck-game/truck-game.component';
const routes: Routes = [
  { path: 'race', component: TruckRaceComponent },
  { path: '', component: TruckGameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
