import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ObjectItemComponent } from "./item-list-item.component";
import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  Output,
  EventEmitter
} from "@angular/core";
import { inject } from "@angular/core/testing";
import { Item } from "../../shared/model/item.model";
import { ObjectService } from "../../service/object.service";
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
  let component: ObjectItemComponent;
  let fixture: ComponentFixture<ObjectItemComponent>;
  const route = ({ data: of({ label: "hello" }) } as any) as ActivatedRoute;
  const post: Item = new Item();
  post.title = "bla";

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ObjectItemComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule
      ],
      providers: [
        FormBuilder,
        ObjectService,
        { provide: ActivatedRoute, useValue: route },
        HttpClient
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectItemComponent);
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
