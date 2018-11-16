import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { MapComponent } from './map/map.component';
import { DashboardDetailedComponent } from './dashboard-detailed/dashboard-detailed.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', component: DashboardDetailedComponent },
    { path: ':id', component: DashboardDetailedComponent }
  ] },
  { path: 'map', component: MapComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }