import { Component, OnInit, Input, OnChanges, SimpleChange, ElementRef } from '@angular/core';
import { FormBuilder, FormGroupDirective, FormGroup, FormControl, FormArray, ControlContainer, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Attribute } from '@angular/compiler';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-gallery-form',
  templateUrl: './gallery-form.component.html',
  styleUrls: ['./gallery-form.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR, useExisting: GalleryFormComponent, multi: true
  }]
})
export class GalleryFormComponent implements ControlValueAccessor, OnChanges {
  @Input() showGallery: boolean;
  @Input() galleryValues;
  public showPieceForm: boolean = false;
  public gallery: FormGroup;
  public mediaTypes = ["Photograph", "Illustration", "Painting"];

  get name() { return this.gallery.get('name'); }
  get curator() { return this.gallery.get('curator'); }
  get summary() { return this.gallery.get('summary'); }
  get pieces() { return this.gallery.get('pieces') as FormArray; }
  get piece() { return this.pieces.value; }
  get formValue() {
    return {
      name: this.name.value,
      curator: this.curator.value,
      summary: this.summary.value,
      pieces: this.pieces.value
    }
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if(changes.showGallery.firstChange){
      if(changes.galleryValues.currentValue){
        var data = changes.galleryValues.currentValue;
        this.gallery.patchValue({
          'name': data.name,
          'curator': data.curator,
          'summary': data.summary
        });

        // TODO: Could reduce this further with restructuring
        for(var x = 0; x < data.pieces.length; x++){
          this.addPiece(data.pieces[x]);
        }
      }  
    }
  }

  constructor(private fb: FormBuilder) {
    this.gallery = this.fb.group({
      'name': '',
      'curator': '',
      'summary': '',
      'pieces': this.fb.array([])
    });
  }

  writeValue(obj: any) {
    if (obj) this.gallery.setValue(this.formValue);
    //throw new Error("Method not implemented.");
  }
  registerOnChange(fn: (obj: any) => void) {
    this.gallery.valueChanges.subscribe(fn);
    //throw new Error("Method not implemented.");
  }
  registerOnTouched(fn: any): void {
    //throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    //throw new Error("Method not implemented.");
  }

  public togglePieceForm(e) {
    if (this.showPieceForm) {
      this.showPieceForm = false;
    } else {
      this.showPieceForm = true;
    }
  }

  public addPiece(pieceValue) {
    var defaultPiece = {
      "hideForm": false,
      "title": "",
      "artist": "",
      "type": "Photograph",
      "dateCreated": "",
      "info": "",
      "embed": ""
    };

    // TODO: make this smarter/refactor
    if(pieceValue){
      defaultPiece.hideForm = pieceValue.hideForm ? pieceValue.hideForm : true;
      defaultPiece.title = pieceValue.title ? pieceValue.title : '';
      defaultPiece.artist = pieceValue.artist ? pieceValue.artist : '';
      defaultPiece.type = pieceValue.type ? pieceValue.type : '';
      defaultPiece.dateCreated = pieceValue.dateCreated ? pieceValue.dateCreated : '';
      defaultPiece.info = pieceValue.info ? pieceValue.info : '';
      defaultPiece.embed = pieceValue.embed ? pieceValue.embed : '';
    }

    this.pieces.push(this.fb.group(defaultPiece));
  }

  public deletePiece(index) {
    this.pieces.removeAt(index);
  }

  private hideForm(form, hidden){
    var hideFormControl = form.get('hideForm') as FormControl;
    hideFormControl.setValue(hidden);
  }

}
