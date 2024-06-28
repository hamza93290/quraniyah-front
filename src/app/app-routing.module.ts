import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@shared/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './modules/home/home.module'
          ).then((m) => m.HomeModule)
      },
      {
        path: 'admin',
        loadChildren: () =>
          import(
            './modules/admin/admin.module'
          ).then((m) => m.AdminModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
