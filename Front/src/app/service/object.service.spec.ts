import { TestBed, inject } from "@angular/core/testing";
import {
  HttpClient,
  HttpParams,
  HttpHandler,
  HttpClientModule
} from "@angular/common/http";

import { ObjectService } from "./object.service";
import { Item } from "../shared/model/item.model";

describe("PostService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientModule],
      providers: [ObjectService, HttpClient]
    });
  });

  it("should be created", inject([ObjectService], (service: ObjectService) => {
    expect(service).toBeTruthy();
  }));


});
