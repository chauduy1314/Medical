export class NewsArticle {
    imageURL;
    title;
    timePost;
    body;

    constructor({
        imageURL = '',
        title = '',
        timePost = '',
        body = ''
    } = {}) {
        this.imageURL = imageURL;
        this.title = title;
        this.timePost = timePost;
        this.body = body;
    }
}