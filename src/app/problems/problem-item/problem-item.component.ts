import {Component, Input, OnInit} from '@angular/core';
import {DataStorageService} from "../../shared/data-storage.service";
import {Contest} from "../../shared/contest.model";

@Component({
  selector: 'app-problem-item',
  templateUrl: './problem-item.component.html',
  styleUrls: ['./problem-item.component.css']
})
export class ProblemItemComponent implements OnInit {

  contests:Contest[];

  @Input() index:number;
  @Input() probId:number;

  constructor(private data:DataStorageService) { }

  ngOnInit() {
    this.contests = this.data.getContests();
    // for(let contest of this.contests){
    //   console.log(contest);
    // }
    console.log(this.contests[0].problems[0].problemName);
  }


}
