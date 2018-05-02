import {Contest} from "./contest.model";
import {Problem} from "./problem.model";
import {ProblemText} from "./problemText.model";
import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class DataStorageService {
  constructor(private http: Http) {}


  a:string = "Chef Tobby is playing a rapid fire with Bhuvan. He gives Bhuvan a string S and each time, Bhuvan has to guess whether there exists 2 equal subsequences in the string or not.\n" +
    "\n" +
    "Bhuvan got a perfect score in the game with Chef Tobby. However, Chef Tobby has now asked Bhuvan to write a program that will do this automatically given a string S. Bhuvan is an intelligent man but he does not know how to write a code. Can you help him?\n" +
    "\n" +
    "Find two different subsequences such that they are equal in their value, more formally, find two sequences of indices (a1, a2, ..., ak-1, ak) and (b1, b2, ..., bk-1, bk) such that:\n" +
    "\n" +
    "1≤ ai, bi ≤ |S|\n" +
    "a<sub>i</sub> < a<sub>i+1</sub> for all valid i\n" +
    "b<sub>i</sub> < b<sub>i+1</sub> for all valid i\n" +
    "S<sub>a<sub>i</sub></sub> = S<sub>b<sub>i</sub></sub> for all valid i\n" +
    "there exist at least one i such that ai is not equal to b<sub>i</sub>";

  b:string = "The first line contains T, the number of test cases.\n" +
    "\n" +
    "Each of the next T lines contain one string S each.\n" +
    "\n" +
    "Input will only consist of lowercase english characters";

  c:string = "For each test case, output \"yes\" or \"no\" (without quotes) as the solution to the problem.\n" +
    "\n";

  d:string = "1 ≤ T ≤ 1000\n" +
    "1 ≤ length of S ≤ 100";

  e:string = "4\n" +
    "likecs\n" +
    "venivedivici\n" +
    "bhuvan\n" +
    "codechef\n";

  private contests: Contest[] = [
    new Contest (1,'COOK86',new Date("March 23, 2018 10:00:00").toString().slice(0,24),new Date("March 24, 2018 16:00:00").toString().slice(0,24),[
      new Problem(1,"Subsequence Equality", 2497 ,new ProblemText(this.a,this.b,this.c,this.d,this.e)),

      new Problem(2,"Another ques",565 ,new ProblemText(this.a,this.b,this.c,this.d,this.e)),
    ]),
    new Contest (2,'COOK85',new Date("August 16, 2017 21:30:00").toString().slice(0,24),new Date("August 16, 2017 23:59:59").toString().slice(0,24),[
      new Problem(1,"Subsequence Equality", 9542,new ProblemText(this.a,this.b,this.c,this.d,this.e)),

      new Problem(2,"Another ques",545 ,new ProblemText(this.a,this.b,this.c,this.d,this.e)),
    ]),
    new Contest (3,'COOK84',new Date("July 16, 2017 21:30:00").toString().slice(0,24),new Date("July 16, 2017 23:59:59").toString().slice(0,24),[
      new Problem(1,"Subsequence Equality", 5454,new ProblemText(this.a,this.b,this.c,this.d,this.e)),

      new Problem(2,"Another ques",214 ,new ProblemText(this.a,this.b,this.c,this.d,this.e)),
    ]),
    new Contest (4,'COOK83',new Date("June 16, 2017 21:30:00").toString().slice(0,24),new Date("June 16, 2017 23:59:59").toString().slice(0,24),[
      new Problem(1,"Subsequence Equality", 4894,new ProblemText(this.a,this.b,this.c,this.d,this.e)),

      new Problem(2,"Another ques", 55,new ProblemText(this.a,this.b,this.c,this.d,this.e)),
    ])
  ];

  getContests() {
    // let url = 'http://localhost:3000/problems';
    // this.http.post(url, {name: 'Subsequence Equality', code: 'SUB', mainText: this.a,
    //   input: this.b,
    //   output: this.c,
    //   constraints: this.d,
    //   example: this.e,
    //   time_limit: 2,
    //   _contestID: '5ab5dc51732f5de924666a99'
    // }).subscribe(
    //   (response:Response) => {
    //
    //     // alert(response);
    //     console.log(response);
    //
    //   },
    //   (error) => {
    //     console.log(error);
    //
    //   }
    // );

    return this.contests.slice();
  }

}
