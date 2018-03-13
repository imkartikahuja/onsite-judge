import {ProblemText} from "./problemText.model";

export class Problem {
  constructor(public problemId:number ,
              public problemName: string,
              public problemSuccessfulSubmissions:number ,
              public problemText: ProblemText){}
}
