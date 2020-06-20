import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/model/item.model';
import { Subscription } from 'rxjs';
import { ObjectService } from '../service/object.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ObjectMockService } from '../service/object-mock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private objects: Item[];
  private subscription: Subscription = new Subscription();
  constructor(private postService: ObjectService, private objectMockService: ObjectMockService, private http : HttpClient) {}

  private readonly GET_LOGOUT = environment.apiURL + 'user/logout';

  public listCategory: string[] = [];

  ngOnInit() {
    this.getCategories();
    this.getPosts();
  }

  onSendMessage() {
    this.getPosts();
  }
  getPosts(): void {
    this.subscription.add(this.postService.getallPosts().subscribe(
      (data: Array<Item>)  => {
        this.objects = data;
    },
    err => console.log(err)
    ));

  }

  getCategories(): void {
    this.subscription.add( this.postService.getallCategories().subscribe(
      (data: Array<string>) => {
        //this.listCategory = data;
        this.listCategory = ["data","pouet"];
      },
      (err) => console.log(err)
    ));
  }

}
