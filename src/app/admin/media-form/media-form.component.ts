import { DatePipe } from "@angular/common";
import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import { DateAdapter, NativeDateAdapter } from "@angular/material";
import { Media }    from "./media";
import { FormGroup, ControlContainer, FormGroupDirective, FormBuilder, FormControl, FormArray } from "@angular/forms";

@Component({
  selector: "app-media-form",
  templateUrl: "./media-form.component.html",
  styleUrls: ["./media.css"],
  viewProviders: [{
    provide: ControlContainer,
    useExisting: FormGroupDirective
  }]
})
export class MediaFormComponent implements OnInit, AfterViewInit {
    public primaryType = ["Video", "Photography", "Audio"];
    public bodyArea = "";
    public currentType = "";
    public todayDate = new Date();
    public model = new Media("", "", "", [], "", "", "", "");
    // title, primaryArtist, primaryType, mediaTypes, body, filePath, url, embed
    public submitted = false;
    public showMain = true;

    public mediaForm: FormGroup;
    public mediaTypes = ["Video", "Image", "Tweet", "Other"];
  
    constructor(parent: FormGroupDirective, private fb: FormBuilder) {
    //   this.form = parent;
    }

    public onSubmit() {
        this.submitted = true;
    }
    public newMedia() {
        this.model = new Media("", "", "", [], "", "", "", "");
    }

    public ngOnInit(){
        // this.form.form.addControl('gallery', 
        //     new FormGroup({
        //         'title': new FormControl(),
        //         'curatedBy': new FormGroup({
        //         'name': new FormControl(),
        //         'url': new FormControl(),
        //         }),
        //         'summary': new FormControl(),
        //         'pieces': new FormArray([])
        //     })
        // );
    }

    public ngAfterViewInit() {
    }

    public addMediaType() {
        this.model.mediaTypes.push(this.currentType);
        this.currentType = "";
    }

    public addMedia() {

    }

    //TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }
}
