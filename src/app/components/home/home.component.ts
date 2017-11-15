import { Component, OnInit } from "@angular/core";
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

  postArray = [];
  scrollDistance = 2;
  throttle = 300;
  pageNumber = 1;
  constructor(private dataService: DataService ) {
    this.addPosts(this.pageNumber);
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

  ngOnInit() {

    // this.dataService.getPosts(##).subscribe((posts) => {
    //   console.log(posts);
    //   this.posts = posts;
    // });
    $(document).ready(function($) {
      // Find matches
      const mql = window.matchMedia("(orientation: landscape)");

      // Add a media query change listener
      mql.addListener(function (m) {
        if (m.matches) {
          // alert("Changed to landscape");
          $(".body-container").mousewheel(function (event, delta) {
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
          $(".body-container").unbind();
        }
      });

      $(window).on("deviceorientation", function (event) {
        if (window.matchMedia("(orientation: portrait)").matches) {
          // alert("Device is in portrait mode");
          $(".body-container").unbind();
        }
        if (window.matchMedia("(orientation: landscape)").matches) {
          // alert("Device is in landscape mode");
          $(".body-container").mousewheel(function (event, delta) {
            event.preventDefault();

            // variable to check if MAC
            const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;

            if (isMac) {
              this.scrollLeft -= (delta * .9);
            } else {
              this.scrollLeft -= (delta * 150);
            }

          });

        }
      });
    });

    // image fit code
//   .container {
//       background-color: red;
//       position: relative;
//       width: 100%;
//
//       padding-top: 62.5%; /* 8:5 Aspect Ratio */
//     }
//
// #im {
//       position: absolute;
//       top: 0;
//       left: 0;
//       right: 0;
//       bottom: 0;
//       background-image: url("/img/path");
//       background-repeat: no-repeat;
//       background-size: cover;
//     }
//     </style>
//     </head>
//     <body>
//
//     <h2>Maintain Aspect Ratio 8:5</h2>
//     <p>Resize the window to see the effect.</p>
//
//     <div class="container">
//     <div id="im"></div>
//       </div>

  }

}
