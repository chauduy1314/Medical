export class Appointment {
    title;
    body;

    constructor({
        title = '',
        body = ''
    } = {}) {
        this.title = title;
        this.body = body;
    }
}