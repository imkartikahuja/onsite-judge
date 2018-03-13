import {Problem} from "./problem.model";

export class Contest {
  public id: number;
  public name: string;
  public startTime: string;
  public endTime: string;
  public problems: Problem[];

  constructor(id:number, name:string , startTime: string , endTime: string ,problems: Problem[]){
    this.id = id;
    this.name = name;
    this.startTime = startTime;
    this.endTime = endTime;
    this.problems = problems;
  }
}
