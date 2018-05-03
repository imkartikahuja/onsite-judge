import { Component, OnInit } from '@angular/core';
import { Contest } from '../../shared/contest.model'
import {DataStorageService} from "../../shared/data-storage.service";
import {ContestService} from "../contest.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-contest-list',
  templateUrl: './contest-list.component.html',
  styleUrls: ['./contest-list.component.css']
})
export class ContestListComponent implements OnInit {

  contests;

  constructor(private contestService: DataStorageService, private conService: ContestService) { }

  ngOnInit() {
    // this.contests = this.contestService.getContests();
    // for (let contest of this.contests){
    //   console.log(contest);
    // }

    this.conService.getContests()
      .subscribe(
        (data: any[]) => {

          this.contests = data;
        },
        (error) => {console.log(error);}
      );

  }

}
