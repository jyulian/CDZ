import { Component } from "@angular/core";

@Component({
  selector: "main",
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent {
  email = "nativescriptrocks@telerik.com";
  isLoggingIn = true;

  submit() {
    alert("You’re using: " + this.email);
  }
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}

