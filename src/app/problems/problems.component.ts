import { Component, OnInit } from '@angular/core';
import 'brace/mode/c_cpp'; import 'ace-builds/src-min-noconflict/snippets/c_cpp';
import {ActivatedRoute, Params} from "@angular/router";
@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent implements OnInit {

  index:number;
  probId:number;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.index = +params['id'];
          this.probId = +params['probId'];
          // console.log(this.index);
        }
      );
  }

  text:string = "";
  options:any = {maxLines: 1000, printMargin: false,enableBasicAutocompletion: true};

  onChange(code) {
    console.log("new code", code);
  }


}
