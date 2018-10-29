import { DatePipe, Location } from "@angular/common";
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, SimpleChange } from "@angular/core";
import { FormControl, FormGroup, Validators, FormBuilder, FormArray, FormGroupDirective, ControlContainer } from "@angular/forms";
import { ActivatedRoute, Params, Router, ParamMap } from "@angular/router";

import { DataService } from "../../services/data.service";
import { text } from "@fortawesome/fontawesome-svg-core";
import { switchMap } from "rxjs/operators";
import { Post, PostInfo } from "./data-class";

@Component({
  selector: "app-post-form",
  styleUrls: ["./forms.css"],
  templateUrl: "./post-form.component.html",
  viewProviders: [{
    provide: ControlContainer,
    useExisting: FormGroupDirective
  }]
})
export class PostFormComponent implements OnInit, OnChanges{
    @Input() postData;
    @Input() populate;
    @Output() public sentSubmit = new EventEmitter<boolean>();
    public postForm: FormGroup;

    public postID;

    public forReview = false;

    // change to constants
    public postTypes = ["Article", "Gallery"];
    public mediaTypes = ["Video", "Image", "Tweet", "Other"];
    public widthSize = ["fullWidth", "semiFullWidth", "halfWidth",
    "columnWidth", "halfColumnWidth", "miniColumnWidth"];

    public showGallery = false;
    public galleryValues = null;

    get headline(){
        return this.postForm.get('headline') as FormControl;
    }

    get gallery(){
        return this.postForm.get('gallery') as FormControl;
    }

    get body(){
        return this.postForm.get('body') as FormArray;
    }

    get syncURL(){
        return this.postForm.get('syncURL') as FormControl;
    }

    get bodyVal(){
        return this.body.value;
    }
    
    constructor(private dataService: DataService, private route: ActivatedRoute, 
        private router:Router, private location: Location, private fb: FormBuilder) {
        this.createForm();
    }

    
    public createForm(){
        this.postForm = this.fb.group({
            'headline': [null, Validators.compose([Validators.required, Validators.maxLength(200)])],
            'subHeadline': [null, Validators.maxLength(200)],
            'featuredImage': [null, Validators.required],
            'customURL': [{value: null, disabled: true}, Validators.required],
            'syncURL': true,
            'publishDate': [(new Date).toISOString(), Validators.required],
            'published': [true, Validators.required],
            'publishedBy': [null, Validators.required],
            'postType': [this.postTypes[0], Validators.required],
            'gallery': this.fb.control({}),
            'body': this.fb.array([])
        });
    }

    // Set customURL events
    // Set publishedBy
    public ngOnInit() {
        this.route.data.subscribe(
            (data: { postData: PostInfo }) => {
                if(Object.keys(data).length !== 0 && data.constructor === Object){
                    this.postForm.patchValue(data.postData);
                    this.patchBodyArray(data.postData);
                    this.postID = data.postData._id;
                }
            }
        );

        this.createCustomURL(); // Events for customURL creation
        this.populateCurrentUser(); // To find the current user

    }

    

    public ngOnChanges(changes: {[propKey: string]: SimpleChange}){
        if(changes.populate.firstChange){
            var data = changes.postData.currentValue;
            data._id? this.postID = data._id : this.postID = null;
            this.postForm.patchValue({
                'headline': data.headline,
                'subHeadline': data.subHeadline,
                'featuredImage': data.featuredImage,
                'customURL': data.customURL,
                'publishDate': data.publishDate,
                'published': data.published,
                'publishedBy': data.publishedBy,
                'postType': data.postType,
                //'gallery': data.gallery ? data.gallery : null,
            });

            this.galleryValues = {
                'name': data.gallery.name,
                'curator': data.gallery.curator,
                'summary': data.gallery.summary,
                'pieces': data.gallery.pieces
            };

            this.showGallery = true;

            this.patchBodyArray(data);
        }
    }

    // Set forReview to true to review
    public onReview() {
        this.forReview = true;
    }

    // Reset form and populate current user
    public onReset() {
        this.showGallery = false;

        // TODO: add publishedBy to this
        this.postForm.reset({
            'publishDate': (new Date).toISOString(),
            'published': true,
            'postType': this.postTypes[0],
        });

        this.postForm.setControl('body', this.fb.array([]));

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
                //this.onReset();
                //this.forReview = false;
                //this.sentSubmit.emit(true);
                this.goBack();
            });
        }        
    }

    goBack(): void {
        this.location.back();
    }

    // Set forReview to false to edit
    public onEdit(){
        this.forReview = false;
    }

    // On postType changes
    public toggleType(e) {
        if (e === "Gallery") {
            this.showGallery = true;
        } else {
            this.showGallery = false;
        }
    }

    public addMedia(mediaValue) {
        var defaultMedia = {
            'hideForm': false,
            'class': "media",
            'title': "",
            'embed': "",
            'type': "",
            'width': "",
        };

        if(mediaValue){
            defaultMedia.hideForm = mediaValue.hideForm ? mediaValue.hideForm : true;
            defaultMedia.class = mediaValue.class ? mediaValue.class : 'media';
            defaultMedia.title = mediaValue.title ? mediaValue.title : '';
            defaultMedia.embed = mediaValue.embed ? mediaValue.embed : '';
            defaultMedia.type = mediaValue.type ? mediaValue.type : '';
            defaultMedia.width = mediaValue.wdith ? mediaValue.width : '';
        }

        this.body.push(this.fb.group(defaultMedia));
    }

    public addArtCard(artCardValue) {
        var defaultArtCard = {
            'hideForm': false,
            'class': "card",
            'title': "",
            'primaryContributor': "",
            'secondaryContributor': "",
            'primaryType': "",
            'summary': "",
            'support': "",
            'sources': this.fb.array([]),
            'contributingArtists': this.fb.array([])
        };

        // Populate form when editing
        if(artCardValue){
            defaultArtCard.hideForm = artCardValue.hideForm ? artCardValue.hideForm : true;
            defaultArtCard.class = artCardValue.class ? artCardValue.class : 'card';
            defaultArtCard.title = artCardValue.title ? artCardValue.title : '';

            defaultArtCard.primaryContributor = artCardValue.primaryContributor ? artCardValue.primaryContributor : '';
            defaultArtCard.secondaryContributor = artCardValue.secondaryContributor ? artCardValue.secondaryContributor : '';
            defaultArtCard.primaryType = artCardValue.primaryType ? artCardValue.primaryType : '';
            defaultArtCard.summary = artCardValue.summary ? artCardValue.summary : '';
            defaultArtCard.support = artCardValue.support ? artCardValue.support : '';

            for(var item in artCardValue.sources){
                defaultArtCard.sources.push(this.fb.control(artCardValue.sources[item]));
            }

            for(var item in artCardValue.contributingArtists){
                defaultArtCard.contributingArtists.push(this.fb.control(artCardValue.contributingArtists[item]));
            }
        }
        
        this.body.push(this.fb.group(defaultArtCard));
    }

    public addText(textValue) {
        var defaultText = {
            'hideForm': false,
            'class': "text",
            'text': "",
        };

        if(textValue){
            defaultText.hideForm = textValue.hideForm ? textValue.hideForm : true;
            defaultText.class = textValue.class ? textValue.class : 'text';
            defaultText.text = textValue.text ? textValue.text : '';
        }

        this.body.push(this.fb.group(defaultText));
    }
    
    public addSource(sourceInput, index) {
        var sources = this.body.at(index).get('sources') as FormArray;
        sources.push(this.fb.control(sourceInput.value));

        sourceInput.value = '';
    }

    public addArtist(artistInput, index) {
        var artists = this.body.at(index).get('contributingArtists') as FormArray;
        artists.push(this.fb.control(artistInput.value));

        artistInput.value = '';
    }
    
    public deleteSource(bodyIndex, sourceIndex){
        (this.body.at(bodyIndex).get('sources') as FormArray).removeAt(sourceIndex);
    }
    public deleteArtist(bodyIndex, sourceIndex){
        (this.body.at(bodyIndex).get('contributingArtists') as FormArray).removeAt(sourceIndex);
    }
    public deleteEntry(index) {
        this.body.removeAt(index);
    }

    private patchBodyArray(post){
        for(var x = 0; x < post.body.length; x++){
            var currentBody = post.body[x];
            if(currentBody.class === "card"){
                this.addArtCard(currentBody);
            } else if (currentBody.class === "media"){
                this.addMedia(currentBody);
            } else if(currentBody.class === "text"){
                this.addText(currentBody);
            }
        }
    }

    // Sets events to headline and subheadline to populate customURL
    // Only when customURL is untouched
    private createCustomURL(){
        const headlineControl = this.postForm.get('headline') as FormControl;
        const subHeadlineControl = this.postForm.get('subHeadline') as FormControl;
        const customURLControl = this.postForm.get('customURL') as FormControl;

        this.syncURL.valueChanges.forEach((value)=>{
            if(value){
                // grab current vals of headline and subheadlines
                customURLControl.setValue(this.slugify(subHeadlineControl.value + '-' + headlineControl.value));
                customURLControl.disable();
            } else {
                customURLControl.enable();
            }
        });

        headlineControl.valueChanges.forEach((value) => {
            if(this.syncURL.value === true){
                // update
                var updatedURL = '';
                if(subHeadlineControl.value){
                    updatedURL = subHeadlineControl.value + '-' + value;
                } else {
                    updatedURL = value ? value : '';
                }

                updatedURL = this.slugify(updatedURL);
                customURLControl.setValue(updatedURL);
            }
        });

        subHeadlineControl.valueChanges.forEach((value) => {
            if(this.syncURL.value === true){
                // update
                var updatedURL = '';
                if(headlineControl.value){
                    updatedURL = value + '-' + headlineControl.value;
                } else {
                    updatedURL = value ? value : '';
                }

                updatedURL = this.slugify(updatedURL);
                customURLControl.setValue(updatedURL);
            }
        });
    }

    // Populate value of publishedBy with current user
    private populateCurrentUser() {
        if(this.postForm.get('publishedBy').value == null){
            this.route.queryParams.subscribe((params: Params) => {
                this.postForm.patchValue({
                    publishedBy: params.user
                });
                console.log(this.postForm.get('publishedBy').value + " is using the post form");
            });
        }
    }

    // Prepares postForm data to be submitted
    private prepareSaveForm() {
        const formModel = this.postForm.value;

        const bodyDeepCopy = formModel.body.map(
            (body) => Object.assign({}, body)
        );

        var gal;
        if(formModel.gallery.pieces){
            const piecesDeepCopy = formModel.gallery.pieces.map(
                (piece) => Object.assign({}, piece)
            );
            gal = formModel.gallery;
            gal.pieces = piecesDeepCopy;
        }

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
        
            body: bodyDeepCopy,
            gallery: gal ? gal : {},
        };

        this.postID ? savePost._id = this.postID: savePost._id = null;

        return savePost;
    }

    // Toggle hidden forms
    private hideForm(form, hidden){
        var hideFormControl = form.get('hideForm') as FormControl;
        hideFormControl.setValue(hidden);
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
