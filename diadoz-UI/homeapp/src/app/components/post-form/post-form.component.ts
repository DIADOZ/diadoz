import { Component, AfterViewInit } from '@angular/core';
import { DateAdapter, NativeDateAdapter } from '@angular/material';
import { DatePipe } from '@angular/common';
import { Post }    from './post';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls:['./forms.css']
})
export class PostFormComponent implements AfterViewInit {
    postTypes = ['Article', 'Media', 'Gallery'];
    bodyArea = '';

    todayDate = new Date();
    model = new Post('', this.postTypes[1],'Tylon Smith', this.todayDate, false, 'Mauro Doza', '', []);
    // headline, postType, primaryImage, publishDate, published, publishedBy, subHeadline, body
    submitted = false;
    showMedia: boolean = false;
    onSubmit() { 
        this.submitted = true; 
    }
    newPost() {
        var today = new Date();
        this.model = new Post('', '', '', today, false, '', '', []);
    }

    newMedia(){
        this.showMedia = !this.showMedia;
    }

    ngAfterViewInit() {
        tinymce.init({
            selector: '#tiny',
            plugins: ['link', 'paste', 'table'],
            skin_url: 'assets/skins/lightgray',
            branding: false
        });
    }
    
    toggleBody(){
        var body = document.getElementById('bodyData'); 
        body.classList.toggle('hide');
    }
    addBody(){
        this.model.body.push(tinymce.activeEditor.getContent());
        this.toggleBody();
        tinymce.activeEditor.setContent('');
    }

    
    //TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }
}