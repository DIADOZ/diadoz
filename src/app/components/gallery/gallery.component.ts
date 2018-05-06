import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";

import * as PhotoSwipe from 'photoswipe';
import * as PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';

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
    let images = [
      { src: 'http://via.placeholder.com/600x400', w: 600, h: 400 },
      { src: 'http://via.placeholder.com/800x600', w: 800, h: 600 }
        // ...
    ];

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
