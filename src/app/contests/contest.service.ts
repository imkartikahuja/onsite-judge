import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Router} from "@angular/router";

@Injectable()
export class ContestService {
  constructor(private http: Http,private router:Router) {}

  contests;

  getContests() {
     return this.http.get('http://localhost:3000/contests')
       .map(
         (response: Response) => {
           const data = response.json();
           console.log(data.contests);
           this.contests = data.contests;
           // console.log('sdsd',this.contests);
           return data.contests;
         }
       );
  }

  getId(index) {
      if(!this.contests)
      {
        this.router.navigate(['/contests']);
        //  return this.http.get('http://localhost:3000/contests')
        //   .subscribe(
        //     (response: Response) => {
        //       const data = response.json();
        //       this.contests = data.contests;
        //       console.log('dsds',this.contests[index]._id);
        //       return data.contests[index]._id;
        //     },
        //     (error) => console.log(error)
        //   );

      }else {
        return this.contests[index]._id;
      }
  }

  getName(index) {
      if(!this.contests)
      {
        this.router.navigate(['/contests']);
      }else {
        return this.contests[index].name;
      }
  }
}
