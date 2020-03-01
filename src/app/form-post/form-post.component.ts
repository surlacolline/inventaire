import { Component, OnInit, Input, OnDestroy, Output } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Post } from "../shared/model/post.model";
import { PostService } from "../service/post.service";
import { Observable, Subscription } from "rxjs";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-form-post",
  templateUrl: "./form-post.component.html",
  styleUrls: ["./form-post.component.scss"],
  animations: [
    trigger("contactsAnimation", [
      state(
        "active",
        style({
          opacity: "1"
        })
      ),
      transition("void => *", [
        style({ transform: "translateY(-100px)", opacity: "0" }),
        animate("1000ms ease-in-out")
      ])
    ])
  ]
})
export class FormPostComponent implements OnInit, OnDestroy {
  @Output()
  messageEmitter: EventEmitter<void> = new EventEmitter<void>();

  sendMessage() {
    this.messageEmitter.emit();
  }

  private addNewPost: FormGroup;

  private subscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder, private postService: PostService) {}

  ngOnInit() {
    this.createform();
  }

  createform() {
    this.addNewPost = this.fb.group({
      title: ["", Validators.compose([Validators.required])],
      content: ["", Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    const newPost = this.addNewPost.value;
    const myPost: Post = {
      id: undefined,
      title: newPost.title,
      content: newPost.content,
      loveIts: 0,
      createdAt: new Date()
    };
    this.subscription.add(
      this.postService.addPost(myPost).subscribe(() => {
        this.sendMessage();
        this.rebuildForm();
      })
    );
  }

  rebuildForm() {
    this.addNewPost.reset({});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
