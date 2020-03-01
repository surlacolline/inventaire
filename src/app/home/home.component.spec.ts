import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PostService } from '../service/post.service';
import { FormPostComponent } from '../form-post/form-post.component';
import { PostListComponent } from '../post-list/post-list.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Post } from '../shared/model/post.model';
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
      declarations: [ HomeComponent, FormPostComponent, PostListComponent ],
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        FormBuilder,
        PostService,
        HttpClient,
        Post
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
