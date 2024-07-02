import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ListEleveComponent } from './components/list-eleve/list-eleve.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'liste', component: ListEleveComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
