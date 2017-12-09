import { DatePipe } from "@angular/common";
import { AfterViewInit, Component } from "@angular/core";
import { DateAdapter, NativeDateAdapter } from "@angular/material";
import { Media }    from "./media";

@Component({
  selector: "media-form",
  templateUrl: "./media-form.component.html",
  styleUrls: ["./media.css"],
})
export class MediaFormComponent implements AfterViewInit {
    public primaryType = ["Video", "Photography", "Audio"];
    public bodyArea = "";
    public currentType = "";
    public todayDate = new Date();
    public model = new Media("", "", "", [], "", "", "", "");
    // title, primaryArtist, primaryType, mediaTypes, body, filePath, url, embed
    public submitted = false;
    public showMain = true;
    public onSubmit() {
        this.submitted = true;
    }
    public newMedia() {
        tinymce.activeEditor.setContent("");
        this.model = new Media("", "", "", [], "", "", "", "");
    }

    public ngAfterViewInit() {
        tinymce.init({
            selector: "#mediaTiny",
            plugins: ["link", "paste", "table"],
            skin_url: "assets/skins/lightgray",
            branding: false,
        });
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
