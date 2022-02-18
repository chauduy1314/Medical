export class NewsArticle {
    imageURL;
    name;
    idCode;

    constructor({
        imageURL = '',
        name = '',
        idCode = '',
    } = {}) {
        this.imageURL = imageURL;
        this.name = name;
        this.idCode = idCode;
    }
}