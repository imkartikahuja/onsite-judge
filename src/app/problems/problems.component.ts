import { Component, OnInit } from '@angular/core';
import 'brace/mode/c_cpp'; import 'ace-builds/src-min-noconflict/snippets/c_cpp';
import {ActivatedRoute, Params} from "@angular/router";
import {Headers, Http, Response} from "@angular/http";
@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent implements OnInit {

  index:number;
  probId:number;

  constructor(private route:ActivatedRoute,private http: Http) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.index = +params['id'];
          this.probId = +params['probId'];
           console.log(this.index);
           console.log(this.probId);
        }
      );
  }

  text:string = "";
  options:any = {maxLines: 1000, printMargin: false,enableBasicAutocompletion: true,fontSize: "15pt"};

  codee:string = "";
  onChange(code) {
    this.codee = code;
    console.log(code);
    // let arr = code.split("\n");
    // let re = /\\n/g;
    // for(let i=0;i<arr.length;i++)
    // {
    //   // arr[i] = arr[i].replace("\\n","\\\\n");
    //   arr[i] = arr[i].replace(re,"\\\\n");
    //   console.log(arr[i]);
    // }
    // console.log(arr);
    // // code = code.replace('\n','\n');
    // console.log("new code", code);
    // let json = JSON.parse("code");
    // console.log(json);
  }

  onSubmit(){

    console.log(this.codee);
    var headers = new Headers();

    let token = sessionStorage.getItem('token');
    headers.append('x-auth', token);
    this.http.post('http://192.168.43.189:3000/submit', {_problemID: '5ab4805793bfd52e20539f1c', _contestID: '5ab47ff893bfd52e20539f19', code: this.codee, language:'cpp', _userID: '5ae84fb260948b6154eb48bf'},{
      headers: headers
    } ).subscribe(
      (response:Response) => {

        alert(response);

      },
      (error) => {
        console.log(error);

      }
    );
  }
}
