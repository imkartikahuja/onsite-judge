import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private authService: AuthService) { }

  isAuthenticated;
  user;

  ngOnInit() {
    this.isAuthenticated = this.authService.getstatus();

  }

  onLogout(){
    localStorage.clear();
    sessionStorage.clear();
    this.authService.onSignout();
  }
}
