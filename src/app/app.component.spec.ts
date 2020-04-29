import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {FormPostComponent} from './formulaire/form-post/form-post.component';
import {ObjectListComponent} from './Gestion objets/item-list/item-list.component';
import {ObjectItemComponent} from './Gestion objets/item-item/item-list-item.component';
import {LoginComponent} from './login/login.component';
import {SubscriptionComponent} from './subscription/subscription.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        SubscriptionComponent,
        FormPostComponent,
        ObjectListComponent,
        ObjectItemComponent,
        LoginComponent,
        SubscriptionComponent
      ],
    }).compileComponents();
  }));






});
