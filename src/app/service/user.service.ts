import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { User } from "../shared/model/user.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private readonly POST_SUBSCRIBE = environment.apiURL + "user/subscribe";
  private readonly POST_LOGIN = environment.apiURL + "user/login";

  constructor(private httpClient: HttpClient) {}

  addUser(user: User, motDePasse: string) {
    return this.httpClient.post(this.POST_SUBSCRIBE, {
      User: user,
      Password: motDePasse
    });
  }

  logUser(email: String, motDePasse: string) {
    return this.httpClient.post(this.POST_LOGIN, {
      Email: email,
      Password: motDePasse
    });
  }
}
