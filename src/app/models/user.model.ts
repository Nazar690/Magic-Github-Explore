export class User {
    constructor(username, avatarUrl, htmlUrl){
        this.username = username;
        this.avatarUrl = avatarUrl;
        this.htmlUrl = htmlUrl;
    }
    public username: string;
    public avatarUrl: string;
    public htmlUrl: string;   
}