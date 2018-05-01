import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {Headers, Http, Response} from "@angular/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router,private http: Http) { }

  @ViewChild('f') signinForm: NgForm;

  ngOnInit() {
  }

  onSignin(){

    this.http.post('http://192.168.43.189:3000/login', this.signinForm.value).subscribe(
      (response: Response) => {

          // console.log(response.status);
          let token =  response.headers.get('x-auth');
          console.log(token);
          sessionStorage.setItem('token',token);
        this.router.navigate(['/contests']);

      },
      (error) => {
        alert("Invalid Email/Password");
        this.signinForm.reset();
      }
    );
  }
}
