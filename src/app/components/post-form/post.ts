export class Post {
    constructor(
      public headline: string,
      public postType: string,
      public featuredImage: string, //id
      public customURL: string,
      public publishDate: Date,
      public published: boolean,
      public publishedBy: string, //id
      public subHeadline?: string,
      public body?: any[],
      public gallery?: {},
    ) {  }
}
