import {Component, OnInit, ViewChild} from '@angular/core';
import {Headers, Http , Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router,private http: Http) { }

  ngOnInit() {
  }

  @ViewChild('f') signupForm: NgForm;

  clk(){
    let code = '#include <iostream>\n' +
    'using namespace std;\n' +
    '\n' +
    'int main(){\n' +
    'int t;\n' +
    'cin>>t;\n' +
    'while(t--){\n' +
    'cout<<"hello\\n";\n' +
    '}\n' +
    '}';


    // return this.http.post('http://localhost:3000/signup', this.signupForm.value);
    return this.http.post('http://192.168.43.189:3000/signup', this.signupForm.value);
  }

  onclk() {

    this.clk().subscribe(
      (response: Response) => {
          var headers: Headers = response.headers;
          console.log(headers);
          let token =  response.headers.get('x-auth');
          console.log(token);
          sessionStorage.setItem('token',token);
          this.router.navigate(['/contests']);
        },
      (error) =>{alert(error); console.log(error);}
    );
  }

}
