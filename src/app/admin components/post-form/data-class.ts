export class Post {
  public headline: string;
  public featuredImage: string; //id
  public customURL: string;
  public publishDate: Date;
  public published: boolean;
  public publishedBy: string; //id
  public postType: string;
  public subHeadline?: string;
  public body?: any[];
  public gallery: Gallery;
}


export class Gallery {
  public title: string;
  public curatedBy: Entity;
  public summary: string;
  public media: Media[];
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
  public dateCreated: Date;
  public summary: string;
  public embed?: string;
}

export class ArtCard {
  class: "card";
  title: string;
  primaryContributor: string;
  secondaryContributor: string;
  primaryType: string;
  summary: string;
  support: string;
  sources = [];
  contributingArtists = [];
}