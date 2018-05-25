import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";

@Component({
  selector: "main",
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent implements OnInit {
  email = "nativescriptrocks@telerik.com";
  isLoggingIn = true;

  constructor (private page: Page){}

  ngOnInit(){
    this.page.actionBarHidden = true;
  }

  submit() {
    alert("You’re using: " + this.email);
  }
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}

