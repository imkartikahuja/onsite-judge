import {Component, Input, OnInit} from '@angular/core';
import {Contest} from "../../shared/contest.model";
import {DataStorageService} from "../../shared/data-storage.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {

  @Input() indexx: number;
  contests:Contest[];
  contest: Contest;


  constructor(private data:DataStorageService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.contests = this.data.getContests();
    this.contest = this.contests[this.indexx];
    console.log(this.indexx);
  }

  onLoadProblem(id:number){
    this.router.navigate(['/contests',this.indexx,id]);
  }

}
