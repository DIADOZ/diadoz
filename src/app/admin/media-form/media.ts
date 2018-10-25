export class Media {
    constructor(
        public title: string,
        public primaryArtist: string, //id
        public primaryType: string,
        public mediaTypes?: string[],
        public body?: string,
        public filePath?: string,
        public url?: string,
        public embed?: string,
    ) {  }
}
