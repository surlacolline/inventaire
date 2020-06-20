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
export class ObjectListComponent implements OnInit, OnChanges {
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
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if (this.objects === undefined) {
      return;
    }
    this.categories = this.objects.map(x => x.category);
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  }


  ngOnInit() {


  }

  onSendMessage() {
    this.sendMessage();
  }
}
