import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {Headers, Http, Response} from "@angular/http";
import {NgForm} from "@angular/forms";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router,private http: Http,private spinnerService: Ng4LoadingSpinnerService,private authService:AuthService) { }

  @ViewChild('f') signinForm: NgForm;

  ngOnInit() {
  }

  onSignin(){

    this.spinnerService.show();

    let user;


    // let url = 'http://192.168.43.189:3000/login';
    let url = 'http://localhost:3000/login';
    this.http.post(url, this.signinForm.value).subscribe(
      (response: Response) => {

          user = response.json().name;
          console.log(user);
          let token =  response.headers.get('x-auth');
          // console.log(token);
          sessionStorage.setItem('token',token);
          sessionStorage.setItem('username',user);
          this.authService.onlogin();
        this.spinnerService.hide();
        this.router.navigate(['/contests']);

      },
      (error) => {
        this.spinnerService.hide();
        alert("Invalid Email/Password");
        this.signinForm.reset();
      }
    );
  }
}
