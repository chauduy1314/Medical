export class UserDTO {
    token;
    authorities;

    constructor({
        token = '',
        authorities = new Array(),
    } = {}) {
        this.token = token;
        this.authorities = authorities
    }
}