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
    primaryType = ['Video', 'Photography', 'Audio'];
    bodyArea = '';
    currentType = '';
    todayDate = new Date();
    model = new Media('', '', '', [], '', '', '', '');
    // title, primaryArtist, primaryType, mediaTypes, body, filePath, url, embed
    submitted = false;

    onSubmit() { 
        this.submitted = true; 
    }
    newMedia() {
        tinymce.activeEditor.setContent('');
        this.model = new Media('', '', '', [], '', '', '', '');
    }

    ngAfterViewInit() {
        tinymce.init({
            selector: '#mediaTiny',
            plugins: ['link', 'paste', 'table'],
            skin_url: 'assets/skins/lightgray',
            branding: false
        });
    }

    addMediaType(){ 
        this.model.mediaTypes.push(this.currentType);
        this.currentType = '';
    }

    
    //TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }
}