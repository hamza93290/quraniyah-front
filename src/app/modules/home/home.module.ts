import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CoreModule } from '@core/core.module';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { ProgrammeComponent } from './component/programme/programme.component';
import { PaypalComponent } from './component/paypal/paypal.component';
import { PaypalModalComponent } from './component/modal/paypal-modal/paypal-modal.component';
import { ReglementComponent } from './component/modal/reglement/reglement.component';
import { EmploisComponent } from './component/emplois/emplois.component';
import { ElevesService } from '@core/services/eleves/eleves.service';


@NgModule({
  declarations: [
    HomeComponent,
    ProgrammeComponent,
    InscriptionComponent,
    PaypalComponent,
    PaypalModalComponent,
    ReglementComponent,
    EmploisComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule
  ]
})
export class HomeModule{ }
