import { Component, OnInit, OnDestroy } from "@angular/core";
import { User } from "../shared/model/user.model";
import { Router } from "@angular/router";
import { UserService } from "../service/user.service";
import { Subscription } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-subscription",
  templateUrl: "./subscription.component.html",
  styleUrls: ["./subscription.component.scss"]
})
export class SubscriptionComponent implements OnInit {
  public nom: string;
  public prenom: string;
  public email: string;
  public motDePasse: string;
  public admin: boolean = true;
  private subscription: Subscription;
  public labelError: String;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.labelError = "";
    let user: User = new User(this.nom, this.prenom, this.email);

    this.userService.addUser(user, this.motDePasse).subscribe(
      () => {
        this.userService.logUser(this.email, this.motDePasse).subscribe(
          (token: any) => {
            localStorage.setItem("access_token", token.accessToken);
            this.router.navigate([""]);
          },
          (error: HttpErrorResponse) => (this.labelError = error.error)
        );
      },
      (error: HttpErrorResponse) => (this.labelError = error.error)
    );
  }
}
