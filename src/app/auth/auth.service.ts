export class AuthService {
  isAuthenticated = false;
  user;

  constructor(){
    if (sessionStorage.getItem('token'))
        this.isAuthenticated = true;
  }

  onlogin() {
    this.isAuthenticated = true;
  }

  onSignout() {
    this.isAuthenticated = false;
  }

  getstatus(){
    return this.isAuthenticated;
  }

  getUser(){
    return sessionStorage.getItem('username');
  }
}
