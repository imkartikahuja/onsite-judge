import {RouterModule, Routes} from "@angular/router";
import {Contest} from "./shared/contest.model";
import {ContestListComponent} from "./contests/contest-list/contest-list.component";
import {SigninComponent} from "./auth/signin/signin.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {ContestDetailsComponent} from "./contests/contest-list/contest-details/contest-details.component";
import {ContestsComponent} from "./contests/contests.component";
import {ProblemsComponent} from "./problems/problems.component";
import {SubmissionComponent} from "./submission/submission.component";

const appRoutes: Routes =[
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'',component:HomeComponent},
  {path: 'mysubmissions', component: SubmissionComponent},
  {path:'contests',component:ContestsComponent, children: [
    {path: ':id', component: ContestDetailsComponent},
    {path: ':id/:probId', component: ProblemsComponent},
    {path: '', component: ContestListComponent},
  ]},
  ];

@NgModule({
  // imports: [RouterModule.forRoot(appRoutes,{useHash: true})],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
