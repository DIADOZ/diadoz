export class Post {
  headline: string;
  featuredImage: string; //id
  customURL: string;
  publishDate: Date;
  published: boolean;
  publishedBy: string; //id
  postType: string;
  subHeadline?: string;
  body?: any[];
  gallery: Gallery;
}

export interface PostInfo {
  _id: string;
  headline: string;
  featuredImage: string; //id
  customURL: string;
  publishDate: Date;
  published: boolean;
  publishedBy: string; //id
  postType: string;
  subHeadline?: string;
  body?: any[];
  gallery: Gallery;
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