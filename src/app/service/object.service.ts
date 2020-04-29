import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";
import { Item } from "../shared/model/item.model";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ObjectService {
  private readonly GET_POSTS = environment.apiURL + "blog";
  private readonly POST_POST = environment.apiURL + "blog";

  private readonly PUT_POST = (postId: number) => `${environment.apiURL}blog/${postId}/edit`;
  private readonly POST_DELETEPOST = (postId: number) => `${environment.apiURL}blog/${postId}/delete`;
  private readonly GET_POST = (postId: number) => environment.apiURL + "blog/" + postId;
  //private readonly PUT_LOVEPOST = (postId: number) => { return environment.apiURL + 'blog/' + postId + '/evaluate'};

  private readonly PUT_LOVEPOST = (postId: number) => `${environment.apiURL}blog/${postId}/evaluate`;

  constructor(private http: HttpClient) {}

  editPost(post: Item): Observable<void> {
    return this.http.put<void>(this.PUT_POST(post.id), post);
  }

  deletePost(postId: number): Observable<void> {
    return this.http.delete<void>(this.POST_DELETEPOST(postId));
  }

  lovePostOrNot(postId: number, loveIts: string): Observable<void> {
    const params = new HttpParams().set("loveIts", loveIts);

    return this.http.put<void>(this.PUT_LOVEPOST(postId), {}, { params });
  }

  addObject(post: Item): Observable<void> {
    //const result = this.http.post<void>(this.POST_POST, post)
    return this.http.post<void>(this.POST_POST, post);
  }

  getallPosts(): Observable<Item[]> {
    return this.http.get<Item[]>(this.GET_POSTS);
  }

  getPost(id: number) {
    return this.http.get<Item>(this.GET_POST(id));
  }
}
