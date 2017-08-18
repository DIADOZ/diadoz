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



  }

}

interface Posts {
  userId:number,
  id:number,
  title:string,
  artist:string,
  type:string,
  image:string,
  link:string
}
