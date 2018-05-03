import {Component, Input, OnInit} from '@angular/core';
import {Contest} from "../../shared/contest.model";
import {DataStorageService} from "../../shared/data-storage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ContestService} from "../../contests/contest.service";
import {ProblemService} from "../../shared/problem.service";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {

  @Input() indexx: number;
  contests:Contest[];
  contest: Contest;
  problems;
  contestName;

  constructor(
    private data:DataStorageService,
    private router:Router,
    private route:ActivatedRoute,
    private contestService:ContestService,
    private problemService: ProblemService,
    private spinnerService: Ng4LoadingSpinnerService
    ) { }

  ngOnInit() {

    this.contests = this.data.getContests();
    // this.contest = this.contests[this.indexx];
    // console.log(this.indexx);

    let id = this.contestService.getId(this.indexx);
    this.contestName = this.contestService.getName(this.indexx);
    // console.log("id",id);

    this.spinnerService.show();
    this.problemService.getProblems(id)
      .subscribe(
        (data: any[]) => {
          console.log(data);
          this.problems = data;
          this.spinnerService.hide();
        },
        (error) => {this.spinnerService.hide();console.log(error);}
      );

  }

  onLoadProblem(id:number){
    this.router.navigate(['/contests',this.indexx,id]);
  }

}
