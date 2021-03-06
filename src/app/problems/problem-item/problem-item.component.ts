import {Component, Input, OnInit} from '@angular/core';
import {DataStorageService} from "../../shared/data-storage.service";
import {Contest} from "../../shared/contest.model";
import {ContestService} from "../../contests/contest.service";
import {ProblemService} from "../../shared/problem.service";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-problem-item',
  templateUrl: './problem-item.component.html',
  styleUrls: ['./problem-item.component.css']
})
export class ProblemItemComponent implements OnInit {

  contests:Contest[];
  problems;
  problem;

  @Input() index:number;
  @Input() probId:number;

  constructor(private data:DataStorageService,private contestService:ContestService, private problemService: ProblemService,private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    // this.contests = this.data.getContests();
    // for(let contest of this.contests){
    //   console.log(contest);
    // }
    // console.log(this.contests[0].problems[0].problemName);

    let id = this.contestService.getId(this.index);


    this.spinnerService.show();
    this.problemService.getProblems(id)
      .subscribe(
        (data: any[]) => {
          this.problems = data;
          this.problem = this.problems[this.probId];
          console.log(this.problem);
          this.spinnerService.hide();
        },
        (error) => {this.spinnerService.hide();console.log(error);}
      );



  }


}
