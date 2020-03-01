import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormPostComponent } from './form-post/form-post.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { AuthGuard } from './core/auth.guard';
import { SubscriptionComponent } from './subscription/subscription.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'blog/add',
    component: FormPostComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'blog/:id',
    component: PostListItemComponent
  },
  {
    path: 'subscribe',
    component: SubscriptionComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
