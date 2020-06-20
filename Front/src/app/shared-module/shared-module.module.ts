import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLateralComponent } from './nav-lateral/nav-lateral.component';
import { SidebarModule } from 'ng-sidebar';



@NgModule({
  declarations: [NavLateralComponent],
  imports: [
    CommonModule,
    SidebarModule
  ],
  exports: [NavLateralComponent]
})
export class SharedModuleModule { }
