import { Component, OnInit } from "@angular/core"; // décorateur

@Component({
  selector: "ns-app", // nom de notre élément html: <ns-app></ns-app>
  templateUrl: "app.component.html" // chemin vers notre code html
  //styleUrls: ["./app.component.css"] // les différents chemins vers nos
  //feuilles de styles que l'on veut appliquer à ce component
})
export class AppComponent {
  public items: Array<any>;
  public tabSelectedIndex: number;

  constructor() {
      this.tabSelectedIndex = 1;
      this.items = new Array<any>();
      for (let i = 0; i < 5; i++) {
          this.items.push("item " + i);
      }
  }
}
