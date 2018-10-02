import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'orders',
    loadChildren: './orders/orders.module#OrdersModule'
  },
  {
    path: 'patient',
    loadChildren: './patient/patient.module#PatientModule'
  },
  {
    path: 'facility',
    loadChildren: './facility/facility.module#FacilityModule'
  },
  {
    path: '',
    redirectTo: '/orders',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
