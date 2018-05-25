"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService, page) {
        this.router = router;
        this.userService = userService;
        this.page = page;
        this.isLoggingIn = true;
        this.user = new user_1.User();
        this.user.email = "jyulian@hotmail.com";
        this.user.password = "12345";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "~/images/background.jpg";
    };
    LoginComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        // TODO: Define
        alert("login");
        /*this.userService.login(this.user)
        .subscribe(
          () => this.router.navigate(["/list"]),
          (error) => alert("Unfortunately we could not find your account.")
        );*/
        this.router.navigate(["/list"]);
    };
    LoginComponent.prototype.signUp = function () {
        alert('hello');
        /*this.userService.register(this.user)
          .subscribe(
            () => {
              alert("Your account was successfully created.");
              this.toggleDisplay();
            },
            () => alert("Unfortunately we were unable to create your account.")
          );*/
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login",
            providers: [user_service_1.UserService],
            templateUrl: "./pages/login/login.html",
            styleUrls: ["./pages/login/login-common.css", "./pages/login/login.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService, page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELCtDQUE4QztBQUM5QywrREFBNkQ7QUFDN0QsMENBQXlDO0FBQ3pDLGdDQUErQjtBQVUvQjtJQVNFLHdCQUFvQixNQUFjLEVBQVUsV0FBd0IsRUFBVSxJQUFVO1FBQXBFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFQeEYsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFRakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFxQixDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUMvQixDQUFDO0lBVEQsaUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyx5QkFBeUIsQ0FBQztJQUN4RCxDQUFDO0lBUUQsK0JBQU0sR0FBTjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixDQUFDO0lBQ0gsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFDRSxlQUFlO1FBQ2YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2Y7Ozs7WUFJSTtRQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmOzs7Ozs7O2NBT007SUFDUixDQUFDO0lBR0Qsc0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7SUFqRFUsY0FBYztRQVAxQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE9BQU87WUFDakIsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztZQUN4QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxFQUFFLHlCQUF5QixDQUFDO1NBQ3pFLENBQUM7eUNBVzRCLGVBQU0sRUFBdUIsMEJBQVcsRUFBZ0IsV0FBSTtPQVQ3RSxjQUFjLENBa0QxQjtJQUFELHFCQUFDO0NBQUEsQUFsREQsSUFrREM7QUFsRFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJsb2dpblwiLFxyXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vcGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcIi4vcGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHVzZXI6IFVzZXI7XHJcbiAgaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5wYWdlLmJhY2tncm91bmRJbWFnZSA9IFwifi9pbWFnZXMvYmFja2dyb3VuZC5qcGdcIjtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICB0aGlzLnVzZXIuZW1haWwgPSBcImp5dWxpYW5AaG90bWFpbC5jb21cIjtcclxuICAgIHRoaXMudXNlci5wYXNzd29yZCA9IFwiMTIzNDVcIjtcclxuICB9XHJcbiAgXHJcbiAgc3VibWl0KCkge1xyXG4gICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcclxuICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zaWduVXAoKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgbG9naW4oKSB7XHJcbiAgICAvLyBUT0RPOiBEZWZpbmVcclxuICAgIGFsZXJ0KFwibG9naW5cIik7XHJcbiAgICAvKnRoaXMudXNlclNlcnZpY2UubG9naW4odGhpcy51c2VyKVxyXG4gICAgLnN1YnNjcmliZShcclxuICAgICAgKCkgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xpc3RcIl0pLFxyXG4gICAgICAoZXJyb3IpID0+IGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIpXHJcbiAgICApOyovXHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbGlzdFwiXSk7XHJcbiAgfVxyXG4gICAgXHJcbiAgc2lnblVwKCkge1xyXG4gICAgYWxlcnQoJ2hlbGxvJyk7XHJcbiAgICAvKnRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIGFsZXJ0KFwiWW91ciBhY2NvdW50IHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIik7XHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZURpc3BsYXkoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSB3ZXJlIHVuYWJsZSB0byBjcmVhdGUgeW91ciBhY2NvdW50LlwiKVxyXG4gICAgICApOyovXHJcbiAgfVxyXG4gICBcclxuICBcclxuICB0b2dnbGVEaXNwbGF5KCkge1xyXG4gICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xyXG4gIH1cclxufVxyXG4iXX0=