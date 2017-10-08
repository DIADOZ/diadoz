import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import * as $ from 'jquery';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Posts[];
  logo = './assets/img/logo/diadoz-white-logo-2017.svg';

  constructor(private dataService: DataService ) { }

  ngOnInit() {

    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });

    $(document).ready(function(){
      $(".tile").click(function(){
        $(this).hide();
      });
    });

    // function horizontalFunction(x) {
    //   if (x.matches) {
    //     $(function (x) {
    //       $("body").mousewheel(function (event, delta) {
    //
    //         this.scrollLeft -= (delta * .4);
    //         event.preventDefault();
    //       });
    //     });
    //   }
    // }
    //
    //
    // let x = window.matchMedia("screen and (orientation: landscape)");
    // horizontalFunction(x);
    // x.addListener(horizontalFunction);



  }

}

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
  __id:string,
  id:number,
  headline:string,
  subHeadline:string,
  postType:string,
  primaryImage:number,
  publishDate:string,
  publishedBy:string,
  body:string,
  media:string,
  published:boolean,
  __v:number
}
