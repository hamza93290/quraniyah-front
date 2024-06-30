import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CoreModule } from '@core/core.module';
import { LoginComponent } from './components/login/login.component';
import { ListEleveComponent } from './components/list-eleve/list-eleve.component';


@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    ListEleveComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule
  ]
})
export class AdminModule { }
