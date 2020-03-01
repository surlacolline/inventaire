import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {FormPostComponent} from './form-post/form-post.component';
import {PostListComponent} from './post-list/post-list.component';
import {PostListItemComponent} from './post-list-item/post-list-item.component';
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
        PostListComponent,
        PostListItemComponent,
        LoginComponent,
        SubscriptionComponent
      ],
    }).compileComponents();
  }));






});
