import {Component, Input, OnInit} from '@angular/core';
import {ContestService} from "../../contests/contest.service";

@Component({
  selector: 'app-prob-sidebar',
  templateUrl: './prob-sidebar.component.html',
  styleUrls: ['./prob-sidebar.component.css']
})
export class ProbSidebarComponent implements OnInit {

  @Input() index:number;

  contest;

  constructor(private contestService:ContestService) { }

  text = "";
  end = "May 3, 2018 16:00:00  ";
  ngOnInit() {
    this.contestService.getContests()
      .subscribe(
        (data: any[]) => {
          // this.contests = data;
          this.contest = data[this.index];
          this.end = this.contest.endTime;
        },
        (error) => console.log(error)
      );
  }

}
