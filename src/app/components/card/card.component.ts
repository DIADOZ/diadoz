import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input("card") public card;
  constructor() { }

  public ngOnInit() {
    const data = this.card;
  }

}
