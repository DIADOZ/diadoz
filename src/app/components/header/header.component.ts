import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnChanges {
  public src = '';
  @Input() color = '';
  public logoSrc = {
    white: "../../../assets/img/logo/diadoz-white-logo-2017.svg",
    black: "../../../assets/img/logo/diadoz-black-logo-2017.svg"
  }

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.color.currentValue === 'white'){
      this.src = this.logoSrc.white;
    } else {  
      this.src = this.logoSrc.black;
    }
  }
}
