import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

declare var $: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // posts: Posts[];
  logo = './assets/img/logo/diadoz-white-logo-2017.svg';
  posts: any = [];

  constructor(private dataService: DataService ) { }


  ngOnInit() {

    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });

    // Find matches
    var mql = window.matchMedia("(orientation: landscape)");

    // Add a media query change listener
    mql.addListener(function(m) {
      if(m.matches) {
        // alert("Changed to landscape");
          $(".body-container").mousewheel(function (event, delta) {
            event.preventDefault();

            //variable to check if MAC
            var isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

            if(isMac){
              this.scrollLeft -= (delta * .9);
            } else {
              this.scrollLeft -= (delta * 150);
            }

          });
      }
      else {
        // alert("Changed to portrait");
        $(".body-container").unbind();
      }
    });

    $(window).on("deviceorientation", function( event ) {
      if (window.matchMedia("(orientation: portrait)").matches) {
        // alert("Device is in portrait mode");
        $(".body-container").unbind();
      }
      if (window.matchMedia("(orientation: landscape)").matches) {
        // alert("Device is in landscape mode");
        $(".body-container").mousewheel(function (event, delta) {
          event.preventDefault();

          //variable to check if MAC
          var isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

          if(isMac){
            this.scrollLeft -= (delta * .9);
          } else {
            this.scrollLeft -= (delta * 150);
          }

        });

      }
    });


    //image fit code
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

// hard coded test data
// interface Posts {
//   userId:number,
//   id:number,
//   title:string,
//   artist:string,
//   type:string,
//   image:string,
//   link:string
// }

interface Posts {
  _id:string,
  headline:string,
  subHeadline:string,
  postType:string,
  featuredImage:string,
  publishDate: string,
  publishedBy:number,
  body: string[],
  published:boolean,
  __v:number
}


