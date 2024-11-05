export class Session {
    token: string  = '';
    expiration: number = 0;

    constructor() {

    }

    setToken(val: string){
        this.token = val;
        return this;
    }

    setExpiration(val: number){
        this.expiration = val;
        return this;
    }
}