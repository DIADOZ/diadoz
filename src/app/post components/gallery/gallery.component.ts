import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input() post;
  @ViewChild('photoSwipe') photoSwipe: ElementRef;

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

    // Initializes and opens PhotoSwipe
    var pswpElement = document.querySelectorAll('.pswp')[0];
    const gallery = new PhotoSwipe(this.photoSwipe.nativeElement, PhotoSwipeUI_Default, images, options);
    gallery.init();
  }
}
