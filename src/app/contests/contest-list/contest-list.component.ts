import { Component, OnInit } from '@angular/core';
import { Contest } from '../../shared/contest.model'
import {DataStorageService} from "../../shared/data-storage.service";

@Component({
  selector: 'app-contest-list',
  templateUrl: './contest-list.component.html',
  styleUrls: ['./contest-list.component.css']
})
export class ContestListComponent implements OnInit {

  contests:Contest[];

  constructor(private contestService: DataStorageService) { }

  ngOnInit() {
    this.contests = this.contestService.getContests();
    // for (let contest of this.contests){
    //   console.log(contest);
    // }
  }

}
