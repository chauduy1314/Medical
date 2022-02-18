export class NotificationArticle {
    imageURL;
    title;
    body;

    constructor({
        imageURL = '',
        title = '',
        body = ''
    } = {}) {
        this.imageURL = imageURL;
        this.title = title;
        this.body = body;
    }
}