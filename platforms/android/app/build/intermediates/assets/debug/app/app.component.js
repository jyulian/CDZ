"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.email = "nativescriptrocks@telerik.com";
        this.isLoggingIn = true;
    }
    AppComponent.prototype.submit = function () {
        alert("You’re using: " + this.email);
    };
    AppComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "main",
            template: "<page-router-outlet></page-router-outlet>"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFNMUM7SUFKQTtRQUtFLFVBQUssR0FBRywrQkFBK0IsQ0FBQztRQUN4QyxnQkFBVyxHQUFHLElBQUksQ0FBQztJQVFyQixDQUFDO0lBTkMsNkJBQU0sR0FBTjtRQUNFLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELG9DQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDO0lBVFUsWUFBWTtRQUp4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLDJDQUEyQztTQUN0RCxDQUFDO09BQ1csWUFBWSxDQVV4QjtJQUFELG1CQUFDO0NBQUEsQUFWRCxJQVVDO0FBVlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibWFpblwiLFxuICB0ZW1wbGF0ZTogXCI8cGFnZS1yb3V0ZXItb3V0bGV0PjwvcGFnZS1yb3V0ZXItb3V0bGV0PlwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIGVtYWlsID0gXCJuYXRpdmVzY3JpcHRyb2Nrc0B0ZWxlcmlrLmNvbVwiO1xuICBpc0xvZ2dpbmdJbiA9IHRydWU7XG5cbiAgc3VibWl0KCkge1xuICAgIGFsZXJ0KFwiWW914oCZcmUgdXNpbmc6IFwiICsgdGhpcy5lbWFpbCk7XG4gIH1cbiAgdG9nZ2xlRGlzcGxheSgpIHtcbiAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG4gIH1cbn1cblxuIl19