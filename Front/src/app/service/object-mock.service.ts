import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ObjectMockService {


  url = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    return this.http.get(this.url + '/object');
  }
}
