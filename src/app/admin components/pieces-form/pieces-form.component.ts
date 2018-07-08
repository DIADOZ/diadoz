import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective, FormBuilder, FormControl, FormGroup, FormArray, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { GalleryComponent } from '../../post components/gallery/gallery.component';

@Component({
  selector: 'app-pieces-form',
  templateUrl: './pieces-form.component.html',
  styleUrls: ['./pieces-form.component.css'],
  providers:[{
    provide: NG_VALUE_ACCESSOR, useExisting: PiecesFormComponent, multi: true
  }]
})
export class PiecesFormComponent implements ControlValueAccessor, OnInit {
      public primaryType = ["Video", "Photography", "Audio"];
      public bodyArea = "";
      public currentType = "";
      public todayDate = new Date();
      // title, primaryArtist, primaryType, mediaTypes, body, filePath, url, embed
      public submitted = false;
      public showMain = true;
  

      public i: FormGroup;

      get title(){ return this.i.get('title'); }
      get embed(){ return this.i.get('embed'); }
      get artist(){ return this.i.get('artist'); }
      get type(){ return this.i.get('type'); }
      get dateCreated(){ return this.i.get('dateCreated'); }
      get info(){ return this.i.get('info'); }
      get formValue() {
        return this.i.value;
      }
    
      constructor(private fb: FormBuilder) {
        this.i = this.fb.group(
            {
                "title": "",
                "embed": "",
                "artist": "",
                "type": "",
                "dateCreated": "",
                "info": ""
            }    
        )
      }

      writeValue(obj: any) {
        if(obj) this.i.setValue(this.formValue);
        //throw new Error("Method not implemented.");
      }
      registerOnChange(fn: (obj: any) => void) {
        this.i.valueChanges.subscribe(fn);
        //throw new Error("Method not implemented.");
      }
      registerOnTouched(fn: any): void {
        //throw new Error("Method not implemented.");
      }
      setDisabledState?(isDisabled: boolean): void {
        //throw new Error("Method not implemented.");
      }
  
      public onSubmit() {
          this.submitted = true;
      }
      public newMedia() {
      }
  
      ngOnInit(){
        // var galleryForm = this.form.form.get('gallery') as FormGroup;
        // galleryForm.addControl('pieces', 
        //     new FormGroup({
        //         'title': new FormControl(),
        //         'summary': new FormControl(),
        //     })
        // );
      }
  
      public ngAfterViewInit() {
      }
  
      //TODO: Remove this when we're done
    //   get diagnostic() {
    //       return JSON.stringify(this.model);
    //   }
  }
  