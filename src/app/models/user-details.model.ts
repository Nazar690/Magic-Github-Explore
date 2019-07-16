export class UserDetails {
    constructor(username, avatarUrl, htmlUrl, name, created, location, company, email){
        this.username = username;
        this.avatarUrl = avatarUrl;
        this.htmlUrl = htmlUrl;
        this.name = name;
        this.created = created;
        this.location = location;
        this.company = company;
        this.email = email;
    }
    public username: string;
    public avatarUrl: string;
    public htmlUrl: string;
    public name: string;
    public created: string;
    public location: string;
    public company: string;
    public email: string;        
}