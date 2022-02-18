export class PromotionArticle {
    imageURL;
    title;
    subTitle;
    body;

    constructor({
        imageURL = '',
        title = '',
        subTitle = '',
        body = '',
    } = {}) {
        this.imageURL = imageURL;
        this.title = title;
        this.subTitle = subTitle;
        this.body = body;
    }
}