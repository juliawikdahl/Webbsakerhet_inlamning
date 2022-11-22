
export default class BlogEntity {
    constructor(_title, _message) {
        this.id = this.GetMaxId();
        this.title =_title;
        this.message =(_message);

    }

    id;
    title;
    message;


GetMaxId() {
    return Math.random() * 1000;
}

};