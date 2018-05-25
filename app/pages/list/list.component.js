"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var ListComponent = /** @class */ (function () {
    function ListComponent(_page) {
        this._page = _page;
        this.funcLista = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this._page.actionBarHidden = true;
        this.funcLista.push("Membros");
        this.funcLista.push("Campeonatos");
        this.funcLista.push("Videos");
        this.funcLista.push("Podcasts");
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: "list",
            moduleId: module.id,
            templateUrl: "./list.html",
            styleUrls: ["./list-common.css", "./list.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRDtBQUNqRCxnQ0FBK0I7QUFRL0I7SUFHRSx1QkFBb0IsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFGL0IsY0FBUyxHQUFrQixFQUFFLENBQUM7SUFFSyxDQUFDO0lBRXBDLGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUUsU0FBUyxDQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUUsYUFBYSxDQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUUsUUFBUSxDQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUUsVUFBVSxDQUFFLENBQUM7SUFDcEMsQ0FBQztJQVhVLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsYUFBYTtZQUMxQixTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLENBQUM7U0FDL0MsQ0FBQzt5Q0FJMkIsV0FBSTtPQUhwQixhQUFhLENBWXpCO0lBQUQsb0JBQUM7Q0FBQSxBQVpELElBWUM7QUFaWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImxpc3RcIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vbGlzdC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2xpc3QtY29tbW9uLmNzc1wiLCBcIi4vbGlzdC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGZ1bmNMaXN0YTogQXJyYXk8U3RyaW5nPiA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYWdlOiBQYWdlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB0aGlzLmZ1bmNMaXN0YS5wdXNoKCBcIk1lbWJyb3NcIiApO1xyXG4gICAgdGhpcy5mdW5jTGlzdGEucHVzaCggXCJDYW1wZW9uYXRvc1wiICk7XHJcbiAgICB0aGlzLmZ1bmNMaXN0YS5wdXNoKCBcIlZpZGVvc1wiICk7XHJcbiAgICB0aGlzLmZ1bmNMaXN0YS5wdXNoKCBcIlBvZGNhc3RzXCIgKTtcclxuICB9XHJcbn1cclxuIl19