"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var ListComponent = /** @class */ (function () {
    function ListComponent(router, _page, _changeDetectionRef) {
        this.router = router;
        this._page = _page;
        this._changeDetectionRef = _changeDetectionRef;
        this.funcLista = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this._page.actionBarHidden = true;
        this.funcLista.push({ name: "Membros" });
        this.funcLista.push({ name: "Campeonatos" });
        this.funcLista.push({ name: "Videos" });
        this.funcLista.push({ name: "Podcasts" });
    };
    ListComponent.prototype.listarIntegrantes = function (event) {
        if (event == "Membros") {
            alert("integrante: " + event);
            this.router.navigate(["/integrantes"]);
        }
        else {
            alert("else: " + event);
        }
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: "list",
            moduleId: module.id,
            templateUrl: "./list.html",
            styleUrls: ["./list-common.css", "./list.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, page_1.Page, core_1.ChangeDetectorRef])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RjtBQUM1RixnQ0FBK0I7QUFDL0IsMENBQXlDO0FBUXpDO0lBR0UsdUJBQW9CLE1BQWMsRUFBVSxLQUFXLEVBQVUsbUJBQXNDO1FBQW5GLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUZ2RyxjQUFTLEdBQWtCLEVBQUUsQ0FBQztJQUU2RSxDQUFDO0lBRzVHLGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQseUNBQWlCLEdBQWpCLFVBQWtCLEtBQUs7UUFDckIsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDckIsS0FBSyxDQUFDLGNBQWMsR0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0osS0FBSyxDQUFDLFFBQVEsR0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixDQUFDO0lBQ0gsQ0FBQztJQXJCVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGFBQWE7WUFDMUIsU0FBUyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDO1NBQy9DLENBQUM7eUNBSTRCLGVBQU0sRUFBaUIsV0FBSSxFQUErQix3QkFBaUI7T0FINUYsYUFBYSxDQXNCekI7SUFBRCxvQkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibGlzdFwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9saXN0Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vbGlzdC1jb21tb24uY3NzXCIsIFwiLi9saXN0LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZnVuY0xpc3RhOiBBcnJheTxPYmplY3Q+ID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX3BhZ2U6IFBhZ2UsIHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxyXG4gIHByaXZhdGUgX21haW5Db250ZW50VGV4dDogc3RyaW5nO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIHRoaXMuZnVuY0xpc3RhLnB1c2goeyBuYW1lOiBcIk1lbWJyb3NcIiB9KTtcclxuICAgIHRoaXMuZnVuY0xpc3RhLnB1c2goeyBuYW1lOiBcIkNhbXBlb25hdG9zXCIgfSk7XHJcbiAgICB0aGlzLmZ1bmNMaXN0YS5wdXNoKHsgbmFtZTogXCJWaWRlb3NcIiB9KTtcclxuICAgIHRoaXMuZnVuY0xpc3RhLnB1c2goeyBuYW1lOiBcIlBvZGNhc3RzXCIgfSk7XHJcbiAgfVxyXG5cclxuICBsaXN0YXJJbnRlZ3JhbnRlcyhldmVudCl7XHJcbiAgICBpZiAoZXZlbnQ9PVwiTWVtYnJvc1wiKSB7XHJcbiAgICAgIGFsZXJ0KFwiaW50ZWdyYW50ZTogXCIrZXZlbnQpO1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvaW50ZWdyYW50ZXNcIl0pO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIGFsZXJ0KFwiZWxzZTogXCIrZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=