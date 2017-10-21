import { Component, AfterViewInit } from '@angular/core';
import { DateAdapter, NativeDateAdapter } from '@angular/material';
import { DatePipe } from '@angular/common';
import { Media }    from './media';

@Component({
  selector: 'media-form',
  templateUrl: './media-form.component.html',
  styleUrls:['./media.css']
})
export class MediaFormComponent implements AfterViewInit {
    postTypes = ['Article', 'Media', 'Gallery'];
    bodyArea = '';

    todayDate = new Date();
    model = new Media('', '', '', [], '', '', '', '');
    // title, primaryArtist, primaryType, mediaTypes, body, filePath, url, embed
    submitted = false;

    onSubmit() { 
        this.submitted = true; 
    }
    newPost() {
        var today = new Date();
        this.model = new Media('', '', '', [], '', '', '', '');
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
        this.toggleBody();
        tinymce.activeEditor.setContent('');
    }

    
    //TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }
}