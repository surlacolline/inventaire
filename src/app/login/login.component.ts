import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: string;
  public motDePasse: string;
  public labelError: string;

private readonly POST_LOGIN = environment.apiURL + 'user/login';


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }


  onSubmit() {
    this.labelError =  "";
    this.userService.logUser(this.email, this.motDePasse)
     .subscribe((token: any) => {
       localStorage.setItem('access_token', token.accessToken);
       this.router.navigate(['']);
      },
      (error: HttpErrorResponse) => (this.labelError = error.error));
  }

}
