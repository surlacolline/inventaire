import { TestBed, inject } from "@angular/core/testing";
import {
  HttpClient,
  HttpParams,
  HttpHandler,
  HttpClientModule
} from "@angular/common/http";

import { PostService } from "./post.service";
import { Post } from "../shared/model/post.model";

describe("PostService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientModule],
      providers: [PostService, HttpClient]
    });
  });

  it("should be created", inject([PostService], (service: PostService) => {
    expect(service).toBeTruthy();
  }));


});
