import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Item as Item} from '../../shared/model/item.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ObjectListComponent implements OnInit {
  @Input()
  objects: Item[];

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
