import { Component, OnInit } from '@angular/core';
import 'brace/mode/c_cpp'; import 'ace-builds/src-min-noconflict/snippets/c_cpp';
import {ActivatedRoute, Params} from "@angular/router";
import {Headers, Http, Response} from "@angular/http";
import {ContestService} from "../contests/contest.service";
import {ProblemService} from "../shared/problem.service";
@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent implements OnInit {

  index:number;
  probId:number;
  problemId;

  constructor(
    private route:ActivatedRoute,
    private http: Http,
    private contestService: ContestService,
    private problemService: ProblemService
    ) { }

  text:string = "";
  codee:string = "";
  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.index = +params['id'];
          this.probId = +params['probId'];
           // console.log(this.index);
           // console.log(this.probId);
        }
      );

    this.problemId = this.problemService.getId(this.probId);

    this.text = localStorage.getItem(this.problemId);
    this.codee = this.text;

  }


  options:any = {
    maxLines: 1000,
    printMargin: false,
    // enableBasicAutocompletion: true,
    fontSize: "15pt"
    // enableLiveAutocompletion: true
  };


  onChange(code) {
    this.codee = code;
    localStorage.setItem(this.problemId, this.codee);
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


    let contestId = this.contestService.getId(this.index);
    // let problemId = this.problemService.getId(this.probId);

    // let url = 'http://192.168.43.189:3000/submit';
    let url = 'http://localhost:3000/submit';

    console.log(this.codee);
    var headers = new Headers();

    let token = sessionStorage.getItem('token');
    headers.append('x-auth', token);
    this.http.post(url, {_problemID: this.problemId, _contestID: contestId, code: this.codee, language:'cpp'},{
      headers: headers
    } ).subscribe(
      (response:Response) => {

        alert(response["_body"]);
        console.log(response["_body"]);

      },
      (error) => {
        console.log(error);

      }
    );
  }
}
