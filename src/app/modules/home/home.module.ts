import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CoreModule } from '@core/core.module';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { ProgrammeComponent } from './component/programme/programme.component';
import { PaypalComponent } from './component/paypal/paypal.component';
import { PaypalModalComponent } from './component/modal/paypal-modal/paypal-modal.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProgrammeComponent,
    InscriptionComponent,
    PaypalComponent,
    PaypalModalComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule
  ]
})
export class HomeModule { }
