import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@core/core.module';
import { LayoutComponent } from './layout/layout.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { NavigationComponent } from './layout/components/navigation/navigation.component';



@NgModule({
  declarations: [
    LayoutComponent,
    BaseLayoutComponent,
    HeaderComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class SharedModule { }
