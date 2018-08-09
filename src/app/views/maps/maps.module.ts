import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Maps Routing
import { MapsRoutingModule } from './maps-routing.module';

import { MapsComponent } from './maps.component';
import { AgmCoreModule } from '../../../../node_modules/@agm/core';

// Angular

@NgModule({
  imports: [
    CommonModule,
    MapsRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    AgmCoreModule
  ],
  declarations: [
    MapsComponent
  ]
})
export class MapsModule { }
