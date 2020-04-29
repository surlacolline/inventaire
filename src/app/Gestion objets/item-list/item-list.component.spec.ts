import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectListComponent } from './item-list.component';

describe('PostListComponent', () => {
  let component: ObjectListComponent;
  let fixture: ComponentFixture<ObjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
