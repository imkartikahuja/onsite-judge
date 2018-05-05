import {Component, OnInit, ViewChild} from '@angular/core';
import {Headers, Http , Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {AuthService} from "../auth.service";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router,private http: Http, private spinnerService: Ng4LoadingSpinnerService,
              private authService: AuthService
  ) { }

  ngOnInit() {
  }

  @ViewChild('f') signupForm: NgForm;

  clk(){
    this.spinnerService.show();
    // return this.http.post('http://localhost:3000/signup', this.signupForm.value);
    return this.http.post('http://172.16.153.0:3000/signup', this.signupForm.value);
  }

  onclk() {
    let user;
    this.clk().subscribe(
      (response: Response) => {
          user = response.json().name;
          console.log(user);
          var headers: Headers = response.headers;
          console.log(headers);
          let token =  response.headers.get('x-auth');
          console.log(token);
          sessionStorage.setItem('token',token);
          sessionStorage.setItem('username',user);
          this.authService.onlogin();
        this.spinnerService.hide();
          this.router.navigate(['/contests']);
        },
      (error) =>{this.spinnerService.hide();alert(error); console.log(error);}
    );
  }

}
