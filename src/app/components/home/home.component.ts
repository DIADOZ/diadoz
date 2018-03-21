import { Component, Input, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

declare var $: any;

@Component({
  selector: "app-home",
  styleUrls: ["./home.component.css"],
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  public logo = "./assets/img/logo/diadoz-white-logo-2017.svg";
  color = 'white';
  public horizontalValue: boolean;

  public postArray = [];
  public scrollDistance = 2;
  public throttle = 300;
  public pageNumber = 1;

  constructor(private dataService: DataService ) {
    this.addPosts(this.pageNumber);
  }

  public ngOnInit() {
    if (matchMedia) {
      const mql = window.matchMedia("(orientation: landscape)");
      mql.addListener(this.orientationChange);
      this.orientationChange(mql);
    }
  }

  public addPosts(page) {
    this.dataService.getPosts(page).subscribe((posts) => {
      this.postArray = this.postArray.concat(posts);
      this.pageNumber++;
    });
  }

  public onScroll() {
    this.addPosts(this.pageNumber);
  }

  private orientationChange(m) {
    if (m.matches) {
      // if landscape
      this.horizontalValue = true;
      $(".tiles-container").mousewheel(function(event, delta) {
        event.preventDefault();

        // Check navigator value, 'MAC' may involve other browsers
        const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;

        if (isMac) {
          this.scrollLeft -= (delta * .9);
        } else {
          this.scrollLeft -= (delta * 100);
        }
      });
    } else {
      // if portrait
      this.horizontalValue = false;

      $(".tiles-container").unbind();
    }
  }
}
