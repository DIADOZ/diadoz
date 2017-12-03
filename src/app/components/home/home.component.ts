import { Component, Input, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

declare var $: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  // posts: Posts[];
  logo = "./assets/img/logo/diadoz-white-logo-2017.svg";
  // posts: any = [];

  // for vertical scrolling
  public scrollWindowValue: boolean;
  public horizontalValue: boolean;

  // for horizontal scrolling
  // scrollWindowValue = false;
  // horizontalValue = true;

  postArray = [];
  scrollDistance = 2;
  throttle = 300;
  pageNumber = 1;
  constructor(private dataService: DataService ) {
    this.addPosts(this.pageNumber);
  }

  ngOnInit() {
    let that = this;

    if (matchMedia) {
      const mql = window.matchMedia("(orientation: landscape)");
      mql.addListener(orientationChange);
      orientationChange(mql);
    }

    // media query change
    function orientationChange(m) {
      if (m.matches) {
        // alert("Changed to landscape");
        that.scrollWindowValue = false;
        that.horizontalValue = true;
        $(".body-container").mousewheel(function(event, delta) {
          event.preventDefault();

          // variable to check if MAC
          const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;

          if (isMac) {
            this.scrollLeft -= (delta * .9);
          } else {
            this.scrollLeft -= (delta * 150);
          }
        });
      } else {
        // alert("Changed to portrait");
        that.scrollWindowValue = true;
        that.horizontalValue = false;
        $(".body-container").unbind();
      }
    }

    // $(document).ready(function($) {
    //   // Find matches
      

    //   // Add a media query change listener
      

    //   $(window).on("deviceorientation", function (event) {
    //     if (window.matchMedia("(orientation: portrait)").matches) {
    //       // alert("Device is in portrait mode");
    //       that.horizontalValue = false;
    //       $(".body-container").unbind();
    //     }
    //     if (window.matchMedia("(orientation: landscape)").matches) {
    //       // alert("Device is in landscape mode");
    //       that.horizontalValue = true;
    //       $(".body-container").mousewheel(function (event, delta) {
    //         event.preventDefault();

    //         // variable to check if MAC
    //         const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;

    //         if (isMac) {
    //           this.scrollLeft -= (delta * .9);
    //         } else {
    //           this.scrollLeft -= (delta * 150);
    //         }
    //       });
    //     }
    //   });
    // });
  }

  addPosts(page) {
    this.dataService.getPosts(page).subscribe((posts) => {
      console.log(posts);
      this.postArray = this.postArray.concat(posts);
      this.pageNumber++;
    });
  }

  onScroll() {
    this.addPosts(this.pageNumber);
  }
}
