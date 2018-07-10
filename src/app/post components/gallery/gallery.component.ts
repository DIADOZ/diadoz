import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input() post;

  constructor() { }

  public ngOnInit() {
    let images = [];
    if(this.post.body.length > 0){
      this.post.body.forEach(image => {
        images.push({title: image.title, src: image.embed, w: 800, h: 800});
      });
    }
    

    // define options (if needed)
    const options = {
      // optionName: 'option value'
      // for example:
      index: 0 // start at first slide
    };

  }
}
