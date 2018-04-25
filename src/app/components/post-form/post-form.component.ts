import { DatePipe } from "@angular/common";
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from "@angular/forms";
import { DateAdapter, NativeDateAdapter } from "@angular/material";
import { MatRadioGroup } from "@angular/material/radio";
import { ActivatedRoute, Params, Router } from "@angular/router";

import { DataService } from "../../services/data.service";

import { Post } from "./data-class";
import { AbstractControl } from "@angular/forms/src/model";

@Component({
  selector: "app-post-form",
  styleUrls: ["./forms.css"],
  templateUrl: "./post-form.component.html",
})
export class PostFormComponent implements OnInit, OnChanges{
    @Input() postData;
    @Output() public sentSubmit = new EventEmitter<boolean>();
    public postForm: FormGroup;
    public galleryForm: FormGroup;
    public mediaForm: FormGroup;
    public artCardForm: FormGroup;
    public textForm: FormGroup;
    public entityForm: FormGroup;
    public editForms: FormGroup;
    //save this

    public postID;

    public hideEditSource = true;
    public forReview = false;

    // change to constants
    public postTypes = ["Article", "Gallery"];
    public mediaTypes = ["Video", "Image", "Tweet", "Other"];
    public widthSize = ["fullWidth", "semiFullWidth", "halfWidth",
    "columnWidth", "halfColumnWidth", "miniColumnWidth"];

    public source = "";
    public artist =  "";
    public showGallery = false;
    public bodyText = "";
     
    public bodyArray = [];
    public sourcesArray = [];
    public artistArray = [];
    
    constructor(private dataService: DataService, private route: ActivatedRoute, private fb: FormBuilder) {
        this.postForm = fb.group({
            'headline': [null, Validators.compose([Validators.required, Validators.maxLength(200)])],
            'subHeadline': [null, Validators.maxLength(200)],
            'featuredImage': [null, Validators.required],
            'customURL': [null, Validators.required],
            'publishDate': [(new Date).toISOString(), Validators.required],
            'published': [true, Validators.required],
            'publishedBy': [null, Validators.required],
            'postType': [this.postTypes[0], Validators.required],
            'gallery': fb.group({
                'title': "",
                'curatedBy': fb.group({
                    'name': "",
                    'url': "",
                }),
                'summary': "",
                'media': this.fb.array([]),
                'endInfo': "",
            }),
            'body': this.fb.array([
                this.fb.group([null])
            ])
        });

        this.mediaForm = fb.group({
            'class': "media",
            'title': "",
            'embed': "",
            'type': "",
            'width': "",
        });

        this.artCardForm = fb.group({
            'class': "card",
            'title': "",
            'primaryContributor': "",
            'secondaryContributor': "",
            'primaryType': "",
            'summary': "",
            'support': "",
        });

        this.textForm = fb.group({
            'class': "text",
            'text': "",
        });

        this.editForms = fb.group({
            'editMedia': this.mediaForm,
            'editArtCard': this.artCardForm
        });
    }

    get headline(){
        return this.postForm.get('headline') as FormControl;
    }

    get body(){
        return this.postForm.get('body') as FormArray;
    }

    // Set customURL events
    // Set publishedBy
    public ngOnInit() {
        // Events for customURL creation
        this.createCustomURL();
        
        // To find the current user
        this.populateCurrentUser();
    }

    public initBody(){
        return this.fb.group(new FormGroup(null));
    }

    public ngOnChanges(changes){
        if(!changes.postData.firstChange){
            var data = changes.postData.currentValue;
            data.id? this.postID = data.id : this.postID = null;
            this.postForm.setValue({
                'headline': data.headline,
                'subHeadline': data.subHeadline,
                'featuredImage': data.featuredImage,
                'customURL': data.customURL,
                'publishDate': data.publishDate,
                'published': data.published,
                'publishedBy': data.publishedBy,
                'postType': data.postType,
                'gallery': data.gallery ? data.gallery : null,
                'body': data.body
            });
        }
    }

    // Set forReview to true to review
    public onReview() {
        this.forReview = true;
    }

    // Reset form and populate current user
    public onReset() {
        this.postForm.reset();
        this.populateCurrentUser();
    }

    // Set forReview to false, prepare data and submit data, reset form
    public onSubmit(postID) {
        // add a "You are reviewing the following" OR sample post
        // use .setValue for editing existing posts
        var postData = this.prepareSaveForm();
        
        if(postData._id){
            this.dataService.updatePost(postData).subscribe((res) => {
                this.onReset();
                this.forReview = false;
                this.sentSubmit.emit(true);
            });
        } else {
            this.dataService.insertPost(postData).subscribe((res) => {
                this.onReset();
                this.forReview = false;
                this.sentSubmit.emit(true);
            });
        }        
    }

    // Set forReview to false to edit
    public onEdit(){
        this.forReview = false;
    }

    // On postType changes
    public toggleType(e) {
        if (e === "Gallery") {
            this.showGallery = true;
            tinymce.init({
                selector: "#gallerySummary",
                plugins: ["link", "paste", "table"],
                skin_url: "assets/skins/lightgray",
                branding: false,
            });
            tinymce.init({
                selector: "#galleryEndInfo",
                plugins: ["link", "paste", "table"],
                skin_url: "assets/skins/lightgray",
                branding: false,
            });
            // hide body and art card buttons
            // show gallery inputs
            // erase post body info
        } else {
            // erase post body and article info
            this.showGallery = false;
        }
    }

    // MEDIA
    // On media button click
    public toggleMedia() {
        this.mediaForm.reset();
        const mediaDiv = document.getElementById("mediaData");
        mediaDiv.classList.toggle("hide");
    
        // hide all other toggled divs
        const bodyDiv = document.getElementById("bodyData");
        const artCardDiv = document.getElementById("artCardData");
        if (!artCardDiv.classList.contains("hide") || !bodyDiv.classList.contains("hide")) {
            artCardDiv.classList.add("hide");
            bodyDiv.classList.add("hide");
        }
    }
    // TODO: add to gallery
    public addMedia() {
        var mediaData = this.mediaForm.value;
        mediaData.class = 'media';

        if (this.postForm.get('postType').value !== "Gallery") {
            this.addToBodyArray(mediaData);
        } else {
            // this would be added to the gallery instead of body
            // this.model.body.push(mediaData);
        }
        this.toggleMedia();
        // clear media input
    }

    // TEXT
    // On body button click
    public toggleText() {
        const bodyDiv = document.getElementById("bodyData");
        bodyDiv.classList.toggle("hide");
        tinymce.init({
            selector: "#articleText",
            plugins: ["link", "paste", "table"],
            skin_url: "assets/skins/lightgray",
            branding: false,
        });

        tinymce.get("articleText").setContent("");
        // hide all other toggled divs
        const artCardDiv = document.getElementById("artCardData");
        const mediaDiv = document.getElementById("mediaData");
        if (!artCardDiv.classList.contains("hide") || !mediaDiv.classList.contains("hide")) {
            artCardDiv.classList.add("hide");
            mediaDiv.classList.add("hide");
        }
    }
    public addText() {
        var savedText = this.prepareSaveText();
        
        this.addToBodyArray(savedText);
        this.toggleText();
    }


    // ART CARD
    public toggleArtCard() {
        this.artCardForm.reset();
        this.sourcesArray.length = 0;
        this.artistArray.length = 0;
        const artCardDiv = document.getElementById("artCardData");
        artCardDiv.classList.toggle("hide");

        // hide all other toggled divs
        const bodyDiv = document.getElementById("bodyData");
        const mediaDiv = document.getElementById("mediaData");
        if (!bodyDiv.classList.contains("hide") || !mediaDiv.classList.contains("hide")) {
            bodyDiv.classList.add("hide");
            mediaDiv.classList.add("hide");
        }
    }
    public addArtCard() {
        var artCardData = this.artCardForm.value;
        artCardData.class = 'card';
        artCardData.source = this.sourcesArray.splice(0);
        artCardData.contributingArtists = this.artistArray.splice(0);
        this.addToBodyArray(artCardData);
        this.toggleArtCard();
    }
    public addSource() {
        const sourceInput = this.source;
        this.sourcesArray.push(sourceInput);

        this.source = '';
    }
    public addArtist() {
        var artistData = this.artist;
        this.artistArray.push(artistData);

        this.artist = "";
    }
    


    // EDIT FORMS
    public editEntry(index, entry) {
        const editContainer = document.getElementById("edit-container-" + index);
        if (entry.class === "media") {
            this.editMediaEntry(index, entry);

            const editMedia = editContainer.querySelector("#media-data-" + index);
            editMedia.classList.remove("hide");
        } else if (entry.class === "card"){
            this.editArtCardEntry(index, entry);

            const editArtCard = editContainer.querySelector("#art-card-data-" + index);
            editArtCard.classList.remove("hide");
        } else {
            this.editTextEntry(index, entry);

            const editBody = editContainer.querySelector("#body-data-" + index);
            editBody.classList.remove("hide");
        }
        const buttonGroup: any = document.querySelector("#button-group-" + index);
        buttonGroup.classList.add("hide");
    }
    public editMediaEntry(index, entry) {
        this.mediaForm.setValue({
            class: entry.class,
            title: entry.title,
            embed: entry.embed,
            type: entry.type,
            width: entry.width
        });
        // set width on radio buttons
    }
    public editArtCardEntry(index, entry) {
        this.artCardForm.setValue({
            class: entry.class,
            title: entry.title,
            primaryContributor: entry.primaryContributor,
            secondaryContributor: entry.secondaryContributor,
            primaryType: entry.primaryType,
            summary: entry.summary,
            support: entry.support
        });
        this.sourcesArray = entry.source;
        this.artistArray = entry.contributingArtists;
    }
    public editTextEntry(index, entry) {
        tinymce.init({
            selector: "#article-text-" + index,
            plugins: ["link", "paste", "table"],
            skin_url: "assets/skins/lightgray",
            branding: false,
        });
        tinymce.get("article-text-" + index).setContent(entry.text);
    }
    public editArtist(index, entry){
        const editEntryArtist = document.querySelector("#artist-entry-" + index);
        const editInputArtist = document.querySelector("#artist-input-" + index);
        editEntryArtist.classList.add("hide");
        editInputArtist.classList.remove("hide");

        this.artist = entry;
    }
    public editSource(index, entry){
        const editEntrySource = document.querySelector("#source-entry-" + index);
        const editInputSource = document.querySelector("#source-input-" + index);
        editEntrySource.classList.add("hide");
        editInputSource.classList.remove("hide");

        this.source = entry;
    }
    // SAVE FORMS
    public saveEntry(index, classType) {
        // grab all values into the media object
        const editContainer = document.getElementById("edit-container-" + index);
        if (classType === "media") {
            this.saveMediaEntry(index);

            const editMedia = editContainer.querySelector("#media-data-" + index);
            editMedia.classList.add("hide");

        } else if (classType === "card"){
            this.saveArtCardEntry(index);
            const editArtCard = editContainer.querySelector("#art-card-data-" + index);
            editArtCard.classList.add("hide");
        } else {
            this.saveTextEntry(index);

            const editText = editContainer.querySelector("#body-data-" + index);
            editText.classList.add("hide");
        }
        const buttonGroup: any = document.querySelector("#button-group-" + index);
        buttonGroup.classList.remove("hide");
    }
    public saveMediaEntry(index) {
        this.bodyArray.splice(index, 1, this.mediaForm.value);
    }
    public saveArtCardEntry(index){
        var newArtCard = this.artCardForm.value;
        newArtCard.source = this.sourcesArray.splice(0);
        newArtCard.contributingArtists = this.artistArray.splice(0);
        this.bodyArray.splice(index, 1, newArtCard)
    }
    public saveTextEntry(index) {
        var textEntry = {
            class: "text",  
            text: tinymce.get("article-text-" + index).getContent(),
        };
        this.bodyArray.splice(index, 1, textEntry);
    }
    public saveSource(index){
        const editEntrySource = document.querySelector("#source-entry-" + index);
        const editInputSource = document.querySelector("#source-input-" + index);
        editEntrySource.classList.remove("hide");
        editInputSource.classList.add("hide");

        this.sourcesArray.splice(index, 1, this.source);
        this.source = '';
    }
    public saveArtist(index){
        const editEntryArtist = document.querySelector("#artist-entry-" + index);
        const editInputArtist = document.querySelector("#artist-input-" + index);
        editEntryArtist.classList.remove("hide");
        editInputArtist.classList.add("hide");

        this.artistArray.splice(index, 1, this.artist);
        this.artist = '';
    }
    
    public deleteSource(index){
        this.sourcesArray.splice(index, 1);
    }
    public deleteArtist(index){
        this.artistArray.splice(index, 1);
    }
    public deleteEntry(index) {
        this.body.removeAt(index);
    }

    // Add bodyObject to postForm's body array
    private addToBodyArray(bodyObject) {
        this.bodyArray.push(bodyObject);
    }

    // Sets events to headline and subheadline to populate customURL
    // Only when customURL is untouched
    private createCustomURL(){
        const headlineControl = this.postForm.get('headline') as FormControl;
        const subHeadlineControl = this.postForm.get('subHeadline') as FormControl;
        const customURLControl = this.postForm.get('customURL') as FormControl;

        headlineControl.valueChanges.forEach((value) => {
            if(!customURLControl.touched){
                // update
                var updatedURL = '';
                if(subHeadlineControl.value){
                    updatedURL = subHeadlineControl.value + '-' + value;
                } else {
                    updatedURL = value;
                }

                updatedURL = this.slugify(updatedURL);
                customURLControl.setValue(updatedURL);
            }
        });

        subHeadlineControl.valueChanges.forEach((value) => {
            if(!customURLControl.touched){
                // update
                var updatedURL = '';
                if(headlineControl.value){
                    updatedURL = value + '-' + headlineControl.value;
                } else {
                    updatedURL = value;
                }

                updatedURL = this.slugify(updatedURL);
                customURLControl.setValue(updatedURL);
            }
        });
    }

    // Populate value of publishedBy with current user
    private populateCurrentUser() {
        this.route.queryParams.subscribe((params: Params) => {
            this.postForm.patchValue({
                publishedBy: params.user
            });
            console.log(this.postForm.get('publishedBy').value + " is using the post form");
        });
    }

    // Prepares text data to be submitted
    private prepareSaveText() {
        const text = tinymce.get("articleText").getContent();

        const saveMedia = {
            class: "text",
            text: text,
        };

        return saveMedia;
    }

    // Prepares postForm data to be submitted
    private prepareSaveForm() {
        const formModel = this.postForm.value;
        
        const savePost = {
            _id: null,
            headline: formModel.headline as string,
            subHeadline: formModel.subHeadline as string,
            postType: formModel.postType as string,
            featuredImage: formModel.featuredImage as string, //id
            customURL: formModel.customURL as string,
            publishDate: formModel.publishDate as Date,
            published: formModel.published as boolean,
            publishedBy: formModel.publishedBy as string, //id
        
            body: this.bodyArray,
            gallery: formModel.gallery as Array<string>,
        };

        this.postID ? savePost._id = this.postID: savePost._id = null;

        return savePost;
    }

    // Modify text for URL
    private slugify(text) {
        return text.toString().toLowerCase()
            .replace(/\s+/g, "-")        // Replace spaces with -
            .replace(/[^\w\-]+/g, "")   // Remove all non-word chars
            .replace(/\-\-+/g, "-")      // Replace multiple - with single -
            .replace(/^-+/, "")          // Trim - from start of text
            .replace(/-+$/, "");         // Trim - from end of text
    }

}
