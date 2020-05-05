import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from "@angular/core";

import { Item } from "../../shared/model/item.model";
import { Observable } from "rxjs";

@Component({
  selector: "app-post-list",
  templateUrl: "./item-list.component.html",
  styleUrls: ["./item-list.component.scss"],
})
export class ObjectListComponent implements OnInit {
  @Input()
  objects: Item[];
  //@Input()
  //categories: string[];

  @Output()
  messageEmitterDelete: EventEmitter<void> = new EventEmitter<void>();

  public categories:string[]


  sendMessage() {
    this.messageEmitterDelete.emit();
  }

  constructor() {}


  ngOnInit() {
this.categories = this.objects.map(x => x.category);

  }

  onSendMessage() {
    this.sendMessage();
  }
}
