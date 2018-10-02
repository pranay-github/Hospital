import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityRoutingModule } from './facility-routing.module';
import { FacilityListComponent } from './facility-list/facility-list.component';

@NgModule({
  imports: [
    CommonModule,
    FacilityRoutingModule
  ],
  declarations: [FacilityListComponent]
})
export class FacilityModule { }
