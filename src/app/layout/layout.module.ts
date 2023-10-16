import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginLayoutComponent } from './container/login-layout/login-layout.component';
import { MainLayoutComponent } from './container/main-layout/main-layout.component';
import { LayoutRoutingModule } from './layout-routing.module';



@NgModule({
  declarations: [
    LoginLayoutComponent,
    MainLayoutComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
