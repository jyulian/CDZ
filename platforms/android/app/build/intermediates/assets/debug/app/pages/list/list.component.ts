import { Component, ElementRef, OnInit, ViewChild, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import { Router } from "@angular/router";

@Component({
  selector: "list",
  moduleId: module.id,
  templateUrl: "./list.html",
  styleUrls: ["./list-common.css", "./list.css"]
})
export class ListComponent implements OnInit {
  funcLista: Array<Object> = [];

  constructor(private router: Router, private _page: Page, private _changeDetectionRef: ChangeDetectorRef) { }
  private _mainContentText: string;

  ngOnInit() {
    this._page.actionBarHidden = true;
    this.funcLista.push({ name: "Membros" });
    this.funcLista.push({ name: "Campeonatos" });
    this.funcLista.push({ name: "Videos" });
    this.funcLista.push({ name: "Podcasts" });
  }

  listarIntegrantes(event){
    if (event=="Membros") {
      alert("integrante: "+event);
      this.router.navigate(["/integrantes"]);
    }else{
      alert("else: "+event);
    }
  }
}
