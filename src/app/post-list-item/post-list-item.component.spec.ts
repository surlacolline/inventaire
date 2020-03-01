import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PostListItemComponent } from "./post-list-item.component";
import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  Output,
  EventEmitter
} from "@angular/core";
import { inject } from "@angular/core/testing";
import { Post } from "../shared/model/post.model";
import { PostService } from "../service/post.service";
import { Subscription, of } from "rxjs";
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule
} from "@angular/forms";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { HttpClient, HttpClientModule } from "@angular/common/http";

describe("PostListItemComponent", () => {
  let component: PostListItemComponent;
  let fixture: ComponentFixture<PostListItemComponent>;
  const route = ({ data: of({ label: "hello" }) } as any) as ActivatedRoute;
  const post: Post = new Post();
  post.title = "bla";

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostListItemComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule
      ],
      providers: [
        FormBuilder,
        PostService,
        { provide: ActivatedRoute, useValue: route },
        HttpClient
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListItemComponent);
    component = fixture.componentInstance;
    component.post = post;
    fixture.detectChanges();
  });

  it("should be instanciate", () => {
    expect(component).toBeTruthy();
  });

  it("should add a like", () => {
    post.loveIts = 0;
    component.lovePost();

    expect(post.loveIts).toEqual(1);
  });

  it("should remove a like", () => {
    post.loveIts = 1;
    component.dontLovePost();

    expect(post.loveIts).toEqual(0);
  });

  it("should show box in red", () => {
    post.loveIts = -1;
    expect(component.lovedPost).toEqual("list-group-item-danger");
  });

  it("should disallow edit", () => {
    component.CancelEditPost();
    expect(component.readMode).toBeTruthy();
  });

});
