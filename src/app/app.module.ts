import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjectListComponent } from './Gestion objets/item-list/item-list.component';
import { ObjectItemComponent } from './Gestion objets/item-item/item-list-item.component';
import { HeaderComponent } from './header/header.component';
import { FormPostComponent } from './formulaire/form-post/form-post.component';
import {ObjectService} from './service/object.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SubscriptionComponent } from './subscription/subscription.component';
import { LoginComponent } from './login/login.component';
import { TokenInterceptor } from './core/token.interceptor';
import { multicast } from 'rxjs/operators';
import { HomeComponent } from './home/home.component';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { NavLateralComponent } from './shared-module/nav-lateral/nav-lateral.component';






@NgModule({
  declarations: [
    AppComponent,
    ObjectListComponent,
    ObjectItemComponent,
    HeaderComponent,
    FormPostComponent,
    SubscriptionComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModuleModule
  ],
  providers: [ObjectService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
