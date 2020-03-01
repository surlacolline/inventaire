import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/model/post.model';
import { Subscription } from 'rxjs';
import { PostService } from '../service/post.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private posts: Post[];
  private subscription: Subscription;
  constructor(private postService: PostService, private http : HttpClient) {}

  private readonly GET_LOGOUT = environment.apiURL + 'user/logout';



  ngOnInit() {
    this.getPosts();
  }

  onSendMessage() {
    this.getPosts();
  }
  getPosts(): void {
    this.subscription = this.postService.getallPosts().subscribe(
      (data: Array<Post>) => {
        this.posts = data;
      },
      err => console.log(err)
    );
  }

}
