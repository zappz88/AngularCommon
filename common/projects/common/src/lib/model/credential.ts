export class Credential {
    
    username: string = "";
    password: string = "";

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    setUsername(val: string): Credential {
        this.username = val;
        return this;
    }

    setPassword(val: string) : Credential {
        this.password = val;
        return this;
    }
}