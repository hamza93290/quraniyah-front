import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProgrammeComponent } from './component/programme/programme.component';
import { InscriptionComponent } from './component/inscription/inscription.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'programme', component: ProgrammeComponent },
  { path: 'inscription', component: InscriptionComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
