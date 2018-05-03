import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MarkdownModule } from 'angular2-markdown';
import { AceEditorModule } from 'ng2-ace-editor';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MomentModule } from 'angular2-moment';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { HeaderComponent } from './header/header.component';
import { ContestListComponent } from './contests/contest-list/contest-list.component';
import { ContestItemComponent } from './contests/contest-list/contest-item/contest-item.component';
import { ProblemsComponent } from './problems/problems.component';
import {DataStorageService} from "./shared/data-storage.service";
import { ProblemItemComponent } from './problems/problem-item/problem-item.component';
import { ProbSidebarComponent } from './problems/prob-sidebar/prob-sidebar.component';
import {CountDown} from "ng2-date-countdown";
import { ContestDetailsComponent } from './contests/contest-list/contest-details/contest-details.component';
import { ProblemListComponent } from './problems/problem-list/problem-list.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { ContestsComponent } from './contests/contests.component';
import {ContestService} from "./contests/contest.service";
import {ProblemService} from "./shared/problem.service";
import {AuthService} from "./auth/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContestListComponent,
    ContestItemComponent,
    ProblemsComponent,
    ProblemItemComponent,
    ProbSidebarComponent,
    CountDown,
    ContestDetailsComponent,
    ProblemListComponent,
    SigninComponent,
    SignupComponent,
    ContestsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MarkdownModule.forRoot(),
    AceEditorModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    MomentModule,
    Ng4LoadingSpinnerModule
  ],
  providers: [DataStorageService,ContestService, ProblemService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
