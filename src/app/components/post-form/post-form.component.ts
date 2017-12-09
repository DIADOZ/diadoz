import { DatePipe } from "@angular/common";
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { DateAdapter, NativeDateAdapter } from "@angular/material";
import { ActivatedRoute, Params, Router } from "@angular/router";

import { DataService } from "../../services/data.service";

import { Post } from "./post";

@Component({
  selector: "app-post-form",
  styleUrls: ["./forms.css"],
  templateUrl: "./post-form.component.html",
})
export class PostFormComponent implements OnInit, OnChanges {
    @Output() public sentSubmit = new EventEmitter<boolean>();
    public postTypes = ["Article", "Gallery"];
    public mediaTypes = ["Video", "Image", "Tweet", "Other"];
    public todayDate = new Date();
    public submitted = false;
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
