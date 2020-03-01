import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private readonly GET_LOGOUT = environment.apiURL + 'user/logout';
  private subscription: Subscription;
  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.subscription = new Subscription();
  }

  get connected(): boolean {
    let result = false;
    if (localStorage.getItem('access_token') != null)
    {
      result = true;
    }
    return result;
  }

  logout() {
    localStorage.removeItem("access_token");
    this.http
    .get(this.GET_LOGOUT)
    .subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
