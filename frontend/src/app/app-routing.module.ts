import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StationsComponent } from './components/stations/stations.component';
import { BikesComponent } from './components/bikes/bikes.component';

const routes: Routes = [
  { path: 'stations', component: StationsComponent},
  { path: 'stations/stationsdetail/:id', component: BikesComponent},
  { path: '', redirectTo: 'stations', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
