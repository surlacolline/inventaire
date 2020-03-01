import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Post} from '../shared/model/post.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input()
  posts: Post[];

  @Output()
  messageEmitterDelete: EventEmitter<void> = new EventEmitter<void>();

 sendMessage(){
   this.messageEmitterDelete.emit();
 }

  constructor() { }

  ngOnInit(){
  }

  onSendMessage(){
    this.sendMessage();
  }
}
