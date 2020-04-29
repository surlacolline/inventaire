import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import {Item} from '../../shared/model/item.model';
import { ObjectService } from '../../service/object.service';
import { Subscription } from 'rxjs';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './item-list-item.component.html',
  styleUrls: ['./item-list-item.component.scss']
})
export class ObjectItemComponent implements OnInit, OnDestroy {


  @Input()
  object: Item;

  @Output()
  messageEmitterDelete: EventEmitter<void> = new EventEmitter<void>();

 sendMessageDelete() {
   this.messageEmitterDelete.emit();
 }

  readMode: Boolean = true;
  private editPost: FormGroup;

  subscription: Subscription = new Subscription();



  constructor(private fb: FormBuilder, private postService: ObjectService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.createform();
    //this.activatedRoute.params.subscribe(data =>
      //this.postService.getPost(data['id'])
      //.subscribe(parampost => this.post = parampost));

  }

  createform(){
    this.editPost = this.fb.group({
      title: [this.object.title, Validators.compose([Validators.required])],
      content: [this.object.content, Validators.compose([Validators.required])]
    });
  }

  AllowEditPost(){
    this.readMode = false;
  }
  DeletePost(){
    this.subscription.add(this.postService.deletePost(this.object.id)
    .subscribe(() => this.sendMessageDelete()));
  }

  SaveEditPost(){
    const editPost = this.editPost.value;
    this.object.title = editPost.title;
    this.object.content = editPost.content;

    this.subscription.add(this.postService.editPost(this.object).subscribe());
    this.readMode = true ;
  }
  CancelEditPost(){
    this.readMode = true;
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
   }

}
