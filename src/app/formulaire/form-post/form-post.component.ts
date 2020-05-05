import { Component, OnInit, Input, OnDestroy, Output } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { Item } from "../../shared/model/item.model";
import { ObjectService } from "../../service/object.service";
import { Observable, Subscription } from "rxjs";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "[app-form-post]",
  templateUrl: "./form-post.component.html",
  styleUrls: ["./form-post.component.scss"],
  animations: [
    trigger("contactsAnimation", [
      state(
        "active",
        style({
          opacity: "1",
        })
      ),
      transition("void => *", [
        style({ transform: "translateY(-100px)", opacity: "0" }),
        animate("1000ms ease-in-out"),
      ]),
    ]),
  ],
})
export class FormPostComponent implements OnInit, OnDestroy {
  @Input()
  categories: string[];

  @Output()
  messageEmitter: EventEmitter<void> = new EventEmitter<void>();

  public addNewItem: FormGroup;
  public listCategory: string[] = [];
  private subscription: Subscription = new Subscription();
  sendMessage() {
    this.messageEmitter.emit();
  }

  constructor(private fb: FormBuilder, private postService: ObjectService) {}

  ngOnInit() {
    this.getCategories();
    this.createform();
  }
  getCategories(): void {
    this.subscription.add( this.postService.getallCategories().subscribe(
      (data: Array<string>) => {
        this.listCategory = data;
      },
      (err) => console.log(err)
    ));
  }

  createform() {
    this.addNewItem = this.fb.group({
      title: ["", Validators.compose([Validators.required])],
      content: ["", Validators.compose([Validators.required])],
      category: ["", Validators.compose([Validators.required])],
    });
  }

  onSubmit() {
    const newPost = this.addNewItem.value;
    const myPost: Item = {
      id: undefined,
      title: newPost.title,
      content: newPost.content,
      category: newPost.category,
      quantity: 1,
      createdAt: new Date(),
    };
    this.subscription.add(

    this.postService.addObject(myPost).subscribe(
      () => {
        this.sendMessage();
        this.rebuildForm();
        this.getCategories();
      },
      (e) => console.log(e),
      () => console.log("complete")
    )
    );
  }

  rebuildForm() {
    this.addNewItem.reset({});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
