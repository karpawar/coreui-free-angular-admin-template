import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapsComponent } from './maps.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Google Maps'
    },
    children: [
      {
        path: 'maps',
        component: MapsComponent,
        data: {
          title: 'Maps'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
