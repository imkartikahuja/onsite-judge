import {Component, Input, OnInit} from '@angular/core';
import {Contest} from "../../../shared/contest.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-contest-item',
  templateUrl: './contest-item.component.html',
  styleUrls: ['./contest-item.component.css']
})
export class ContestItemComponent implements OnInit {

  @Input() contest: Contest;
  @Input() index: number;

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {

  }

  onOpen(){
    this.router.navigate(['/contests',this.index]);
  }

}
