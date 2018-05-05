import {Headers, Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Injectable()
export class ProblemService {
  constructor(private http : Http,private router:Router){}

  problems;

  getProblems(id:string) {

    // id = "5ab47ff893bfd52e20539f19";
    let headers = new Headers();
    let token = sessionStorage.getItem('token');
    headers.append('x-auth', token);

    // let  url = 'http://localhost:3000/problems/find';

    return this.http.post(environment.apiUrl+'/problems/find', {id: id})
      .map(
        (response: Response) => {
          const data = response.json();
          console.log(data.probs);
          this.problems = data.probs;
          return data.probs;
        }
      );
  }

  getId(index) {
    if(!this.problems)
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
      return this.problems[index]._id;
    }
  }
}
