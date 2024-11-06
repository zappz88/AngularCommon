export class Session {
    token: string  = '';
    expiration: number = 0;

    constructor() {

    }

    setToken(val: string) : Session {
        this.token = val;
        return this;
    }

    setExpiration(val: number) : Session {
        this.expiration = val;
        return this;
    }
}