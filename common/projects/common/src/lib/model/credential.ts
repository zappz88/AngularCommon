export class Credential {
    
    username: string = "";
    password: string = "";

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    setUsername(val: string){
        this.username = val;
        return this;
    }

    setPassword(val: string){
        this.password = val;
        return this;
    }
}