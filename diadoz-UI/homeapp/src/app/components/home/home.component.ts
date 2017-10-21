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
  posts: any = {};

  constructor(private dataService: DataService ) { }


  ngOnInit() {

    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });

    // $(document).ready(function(){
    //   $(".tile").click(function(){
    //     $(this).hide();
    //   });
    // });

    function horizontalFunction(x) {
      if (x.matches) {
        $(function (x) {
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
        });
      }
    }


    var x = window.matchMedia("screen and (orientation: landscape)");
    horizontalFunction(x);
    x.addListener(horizontalFunction);



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
  primaryImage:string[],
  publishDate: string,
  publishedBy:number,
  body: string[],
  media:string[],
  published:boolean,
  __v:number
}


