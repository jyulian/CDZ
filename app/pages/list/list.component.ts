import { Component, OnInit} from "@angular/core";
import { Page } from "ui/page";

@Component({
  selector: "list",
  moduleId: module.id,
  templateUrl: "./list.html",
  styleUrls: ["./list-common.css", "./list.css"]
})
export class ListComponent implements OnInit {
  funcLista: Array<String> = [];

  constructor(private _page: Page) { }

  ngOnInit() {
    this._page.actionBarHidden = true;
    this.funcLista.push( "Membros" );
    this.funcLista.push( "Campeonatos" );
    this.funcLista.push( "Videos" );
    this.funcLista.push( "Podcasts" );
  }
}
