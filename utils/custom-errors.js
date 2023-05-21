export class PageError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = "PageError";
        this.status = statusCode;
    }
}