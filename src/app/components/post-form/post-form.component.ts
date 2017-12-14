import { DatePipe } from "@angular/common";
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { DateAdapter, NativeDateAdapter } from "@angular/material";
import { MatRadioGroup } from "@angular/material/radio";
import { ActivatedRoute, Params, Router } from "@angular/router";

import { DataService } from "../../services/data.service";

import { Post } from "./post";

@Component({
  selector: "app-post-form",
  styleUrls: ["./forms.css"],
  templateUrl: "./post-form.component.html",
})
export class PostFormComponent implements OnInit, OnChanges {
    public editForm = new FormGroup ({
        radioGroup: new FormControl(),
    });
    @Output() public sentSubmit = new EventEmitter<boolean>();
    public postTypes = ["Article", "Gallery"];
    public mediaTypes = ["Video", "Image", "Tweet", "Other"];
    public widthSize = ["fullWidth", "semiFullWidth", "halfWidth",
    "columnWidth", "halfColumnWidth", "miniColumnWidth"];
    public todayDate = new Date();
    public submitted = false;
    public editShow = false;
    public editedSources = [];
    public editedArtists = [];
    // headline, postType, featuredImage, customURL, publishDate, published, publishedBy, subHeadline, body

    public media = {
        class: "media",
        title: "",
        embed: "",
        type: "",
        width: "",
    };
    public artCard = {
        class: "card",
        title: "",
        primaryContributor: "",
        secondaryContributor: "",
        primaryType: "",
        summary: "",
        support: "",
        sources: [],
        contributingArtists: [],
    };
    public gallery = {
        title: "",
        curatedBy: {
            name: "",
            url: "",
        },
        summary: "",
        media: [],
        endInfo: "",
    };
    public source = "";
    public artist = "";
    public showGallery = false;
    public bodyText = "";
    @Input() public formData: Post;
    public model = new Post("", "", this.postTypes[0], "", "", this.todayDate, false, "", "", [], {});
    constructor(private dataService: DataService, private route: ActivatedRoute) {
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (this.formData) {
            this.model = this.formData;
        }
    }

    public changeSelect(e) {
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
    public ngOnInit() {
        this.route.queryParams.subscribe((params: Params) => {
            this.model.publishedBy = params.user;
            console.log(this.model.publishedBy + " is using the post form");
        });
    }

    public onSubmit() {
        this.submitted = true;
        if (this.model.postType === "Gallery") {
            this.gallery.summary = tinymce.get("gallerySummary").getContent();
            this.gallery.endInfo = tinymce.get("galleryEndInfo").getContent();

            this.model.gallery = this.gallery;
        }
        if (!this.model.customURL || this.model.customURL === "") {
            this.model.customURL = this.slugify(this.model.headline);
        }
    }

    public sendData() {
        this.submitted = false;
        if (this.model._id) {
            // update
            this.dataService.updatePost(this.model).subscribe((model) => {
                this.newPost();
                this.sentSubmit.emit(true);
            });
        } else {
            this.dataService.insertPost(this.model).subscribe((model) => {
                this.newPost();
                this.sentSubmit.emit(true);
            });
        }
    }

    public newPost() {
        const today = new Date();
        this.model = new Post("", "", this.postTypes[0], "", "", today, false, this.model.publishedBy, "", []);
    }

    public toggleMedia() {
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
    public toggleArtCard() {
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
    public toggleBody() {
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

    public addSource(sourceData) {
        sourceData = this.source;
        this.artCard.sources.push(sourceData);
        this.source = "";
    }
    public addArtist(artistData) {
        artistData = this.artist;
        this.artCard.contributingArtists.push(artistData);
        this.artist = "";
    }

    public addMedia(mediaData) {
        mediaData = {
            class: "media",
            title: this.media.title,
            embed: this.media.embed,
            type: this.media.type,
            width: this.media.width,
        };
        if (this.model.postType === "Gallery") {
            this.gallery.media.push(mediaData);
        } else {
            this.model.body.push(mediaData);
        }
        this.toggleMedia();
        // clear media input
    }
    public addArtCard(artCardData) {
        artCardData = {
            class: "card",
            title: this.artCard.title,
            primaryContributor: this.artCard.primaryContributor,
            secondaryContributor: this.artCard.secondaryContributor,
            primaryType: this.artCard.primaryType,
            summary: this.artCard.summary,
            support: this.artCard.support,
            sources: this.artCard.sources.slice(0),
            contributingArtists: this.artCard.contributingArtists.slice(0),
        };

        this.model.body.push(artCardData);
        this.toggleArtCard();
        this.artCard.sources.length = 0;
        this.artCard.contributingArtists.length = 0;
        // clear art card input
    }
    public addBody() {
        this.model.body.push({
            class: "text",
            text: tinymce.get("articleText").getContent(),
        });
        this.toggleBody();
    }

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

    public editTextEntry(index, entry) {
        tinymce.init({
            selector: "#article-text-" + index,
            plugins: ["link", "paste", "table"],
            skin_url: "assets/skins/lightgray",
            branding: false,
        });
        tinymce.get("article-text-" + index).setContent(entry.text);
    }

    public editMediaEntry(index, entry) {
        const editContainer = document.getElementById("edit-container-" + index);

        const mediaTitle: any = editContainer.querySelector("#media-title-" + index);
        mediaTitle.value = entry.title;

        const embed: any = editContainer.querySelector("#embed-" + index);
        embed.value = entry.embed;

        const mediaType: any = editContainer.querySelector("#media-type-" + index);
        mediaType.value = entry.type;

        const mediaWidth = document.querySelector("#media-width-" + index);
        this.editForm.setValue({
            radioGroup: entry.width,
        });
    }

    public editArtCardEntry(index, entry) {
        const editContainer = document.getElementById("edit-container-" + index);

        const artCardTitle: any = editContainer.querySelector("#art-card-title-" + index);
        artCardTitle.value = entry.title;

        const artCardPrimaryContributor: any = editContainer.querySelector("#primary-contributor-" + index);
        artCardPrimaryContributor.value = entry.primaryContributor;

        const artCardSC: any = editContainer.querySelector("#secondary-contributor-" + index);
        artCardSC.value = entry.secondaryContributor;

        const artCardType: any = document.querySelector("#primary-type-" + index);
        artCardType.value = entry.primaryType;

        const artCardSummary: any = document.querySelector("#summary-" + index);
        artCardSummary.value = entry.summary;

        const artCardSupport: any = document.querySelector("#support-" + index);
        artCardSupport.value = entry.support;

        const artCardSources: any = document.querySelector("#sources-" + index); // NEED TO CHANGE IN FUTURE
        artCardSources.value = entry.support;

        const artCardArtists: any = document.querySelector("#contributing-artists-" + index); // NEED TO CHANGE IN FUTURE
        artCardArtists.value = entry.support;
    }

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

    public saveTextEntry(index) {
        this.model.body[index] = {
            class: "text",
            text: tinymce.get("article-text-" + index).getContent(),
        };
    }

    public saveArtCardEntry(index){
        const newArtCard = {
            class: "card",
            title: "",
            primaryContributor: "",
            secondaryContributor: "",
            primaryType: "",
            summary: "",
            support: "",
            sources: [],
            contributingArtists: [],
        };
        const editContainer = document.getElementById("edit-container-" + index);

        const artCardTitle: any = editContainer.querySelector("#art-card-title-" + index);
        newArtCard.title = artCardTitle.value;

        const artCardPrimaryContributor: any = editContainer.querySelector("#primary-contributor-" + index);
        newArtCard.primaryContributor = artCardPrimaryContributor.value;

        const artCardSC: any = editContainer.querySelector("#secondary-contributor-" + index);
        newArtCard.secondaryContributor = artCardSC.value;

        const artCardType: any = document.querySelector("#primary-type-" + index);
        newArtCard.primaryType = artCardType.value;

        const artCardSummary: any = document.querySelector("#summary-" + index);
        newArtCard.summary = artCardSummary.value;

        const artCardSupport: any = document.querySelector("#support-" + index);
        newArtCard.support = artCardSupport.value;

        newArtCard.sources = this.editedSources.slice();
        newArtCard.contributingArtists = this.editedArtists.slice();

        this.model.body[index] = newArtCard;

        this.editedSources.length = 0;
        this.editedArtists.length = 0;
    }

    public editSource(index){
        const artCardSources: any = document.querySelector("#sources-" + index); // NEED TO CHANGE IN FUTURE
        this.editedSources.push(artCardSources.value);
        artCardSources.value = "";
    }

    public editArtists(index) {
        const artCardArtists: any = document.querySelector("#contributing-artists-" + index); // NEED TO CHANGE IN FUTURE
        this.editedArtists.push(artCardArtists.value);
        artCardArtists.value = "";
    }
    public saveMediaEntry(index) {
        const newMedia = {
            class: "media",
            title: "",
            embed: "",
            type: "",
            width: "",
        };
        const editContainer = document.getElementById("edit-container-" + index);

        const mediaTitle: any = editContainer.querySelector("#media-title-" + index);
        newMedia.title = mediaTitle.value;

        const embedInput: any = editContainer.querySelector("#embed-" + index);
        newMedia.embed = embedInput.value;

        const typeInput: any = editContainer.querySelector("#media-type-" + index);
        newMedia.type = typeInput.value;

        const widthInput: any = [].slice.call(editContainer.querySelectorAll("#media-width-" + index + " input"));
        newMedia.width = this.editForm.value.radioGroup;

        // replace index value with new media object
        this.model.body[index] = newMedia;
        // replace save button with edit button

    }

    public deleteEntry(index) {
        this.model.body.splice(index, 1);
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }

    public slugify(text) {
        return text.toString().toLowerCase()
            .replace(/\s+/g, "-")        // Replace spaces with -
            .replace(/[^\w\-]+/g, "")   // Remove all non-word chars
            .replace(/\-\-+/g, "-")      // Replace multiple - with single -
            .replace(/^-+/, "")          // Trim - from start of text
            .replace(/-+$/, "");         // Trim - from end of text
    }

}
