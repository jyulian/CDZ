import { Component, OnInit } from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";
import { Page } from "ui/page";


@Component({
  selector: "login",
  providers: [UserService],
  templateUrl: "./pages/login/login.html",
  styleUrls: ["./pages/login/login-common.css", "./pages/login/login.css"]
})

export class LoginComponent implements OnInit {
  user: User;
  isLoggingIn = true;

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "~/images/background.jpg";
  }

  constructor(private router: Router, private userService: UserService, private page: Page) {
    this.user = new User();
    this.user.email = "jyulian@hotmail.com";
    this.user.password = "12345";
  }
  
  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }
  
  login() {
    // TODO: Define
    alert("login");
    /*this.userService.login(this.user)
    .subscribe(
      () => this.router.navigate(["/list"]),
      (error) => alert("Unfortunately we could not find your account.")
    );*/
    this.router.navigate(["/list"]);
  }
    
  signUp() {
    alert('hello');
    /*this.userService.register(this.user)
      .subscribe(
        () => {
          alert("Your account was successfully created.");
          this.toggleDisplay();
        },
        () => alert("Unfortunately we were unable to create your account.")
      );*/
  }
   
  
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}
