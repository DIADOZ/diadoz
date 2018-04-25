export class Post {
  public headline: string;
  public postType: string;
  public featuredImage: string; //id
  public customURL: string;
  public publishDate: Date;
  public published: boolean;
  public publishedBy: string; //id
  public subHeadline?: string;
  public body?: any[];
  public gallery: Gallery;
}


export class Gallery {
  public title = "";
  public curatedBy: Entity;
  public summary: string = "";
  public media: any[];
  public endInfo: "";
}

export class Entity {
  name: string;
  url: string;
}

export class Media {
  public title: string;
  public primaryArtist: string; //id
  public primaryType: string;
  public mediaTypes?: string[];
  public body?: string;
  public filePath?: string;
  public url?: string;
  public embed?: string;

}

export class ArtCard {
  class: "card";
  title: String;
  primaryContributor: String;
  secondaryContributor: String;
  primaryType: String;
  summary: "";
  support: "";
  sources = [];
  contributingArtists = [];
}