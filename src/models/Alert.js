export class Alert {
    body;
    time;

    constructor({
        body = '',
        time = ''
    } = {}) {
        this.body = body;
        this.time = time;
    }
}