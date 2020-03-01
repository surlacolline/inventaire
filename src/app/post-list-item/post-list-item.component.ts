import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import {Post} from '../shared/model/post.model';
import { PostService } from '../service/post.service';
import { Subscription } from 'rxjs';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit, OnDestroy {


  @Input()
  post: Post;

  @Output()
  messageEmitterDelete: EventEmitter<void> = new EventEmitter<void>();

 sendMessageDelete() {
   this.messageEmitterDelete.emit();
 }

  readMode: Boolean = true;
  private editPost: FormGroup;

  subscription: Subscription = new Subscription();

  get lovedPost(): string {
    let result = 'list-group-item-secondary';
    if (this.post.loveIts < 0) {
      result = 'list-group-item-danger';
    } else if (this.post.loveIts > 0) {
      result = 'list-group-item-success';
    }

    return result;
  }

  constructor(private fb: FormBuilder, private postService: PostService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.createform();
    //this.activatedRoute.params.subscribe(data =>
      //this.postService.getPost(data['id'])
      //.subscribe(parampost => this.post = parampost));

  }

  createform(){
    this.editPost = this.fb.group({
      title: [this.post.title, Validators.compose([Validators.required])],
      content: [this.post.content, Validators.compose([Validators.required])]
    });
  }

  AllowEditPost(){
    this.readMode = false;
  }
  DeletePost(){
    this.subscription.add(this.postService.deletePost(this.post.id)
    .subscribe(() => this.sendMessageDelete()));
  }

  SaveEditPost(){
    const editPost = this.editPost.value;
    this.post.title = editPost.title;
    this.post.content = editPost.content;

    this.subscription.add(this.postService.editPost(this.post).subscribe());
    this.readMode = true ;
  }
  CancelEditPost(){
    this.readMode = true;
  }
  lovePost(){
    this.post.loveIts++;
    this.subscription.add(this.postService.lovePostOrNot(this.post.id, 'love').subscribe());

  }

  dontLovePost(){
    this.post.loveIts--;
    this.subscription.add(this.postService.lovePostOrNot(this.post.id, 'dontlove').subscribe());


  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
   }

}
