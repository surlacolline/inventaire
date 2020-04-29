import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ObjectService } from '../service/object.service';
import { FormPostComponent } from '../formulaire/form-post/form-post.component';
import { ObjectListComponent } from '../Gestion objets/item-list/item-list.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Item } from '../shared/model/item.model';
import { AppModule } from '../app.module';
import { Component } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  @Component({
    template: ''
  })
  class DummyComponent {
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, FormPostComponent, ObjectListComponent ],
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        FormBuilder,
        ObjectService,
        HttpClient,
        Item
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
