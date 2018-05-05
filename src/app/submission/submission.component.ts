import { Component, OnInit } from '@angular/core';
import {Headers, Http, Response} from "@angular/http";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {

  constructor(private http:Http,private spinnerService: Ng4LoadingSpinnerService) { }

  submission;
  name;

  ngOnInit() {
    let headers = new Headers();
    let token = sessionStorage.getItem('token');
    headers.append('x-auth', token);

    // let  url = 'http://localhost:3000/problems/find';
    this.spinnerService.show();
    this.http.get('http://172.16.153.0:3000/mysubmissions',{headers:headers})
      .subscribe(
        (response: Response) => {
          const data = response.json();
          this.spinnerService.hide();
          this.submission = data.result;
          console.log(data.result);
        }
      );

    this.name = sessionStorage.getItem('username');
  }

}
