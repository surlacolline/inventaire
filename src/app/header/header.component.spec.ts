import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { SubscriptionComponent } from '../subscription/subscription.component';
import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  @Component({
    template: ''
  })
  class DummyComponent {
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent,  DummyComponent],
      imports: [HttpClientModule,
        CommonModule,
        RouterTestingModule.withRoutes([
        { path: 'subscribe', component: DummyComponent },
        { path: 'login', component: DummyComponent}])
       ],
      providers: [HttpClient]  })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be instanciate", () => {
    expect(component).toBeTruthy();
  });

  it("should not be connected without Token", () => {
    if (localStorage.getItem('access_token') != null)
    {
    localStorage.removeItem("access_token");
    }

    expect(component.connected).toBeFalsy();
  });

});
