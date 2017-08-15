import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {post} from "selenium-webdriver/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Posts[];

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
