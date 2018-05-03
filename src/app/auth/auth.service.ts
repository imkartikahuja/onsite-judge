export class AuthService {
  isAuthenticated = false;

  onlogin() {
    this.isAuthenticated = true;
  }

  onSignout() {
    this.isAuthenticated = false;
  }

  getstatus(){
    return this.isAuthenticated;
  }
}
