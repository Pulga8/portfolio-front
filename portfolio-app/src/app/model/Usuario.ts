export class Usuario {
    id?: number;
    username: String;
    password: String;

    constructor(username: String, password: String) {
        this.username = username;
        this.password = password;
    }
}