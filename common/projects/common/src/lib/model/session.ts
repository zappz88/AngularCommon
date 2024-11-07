export class Session {
    token: string  = '';
    expiration: number = 0;
    isLoggedIn: boolean = false;

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

    setIsLoggedIn(val: boolean) : Session {
        this.isLoggedIn = val;
        return this;
    }
}