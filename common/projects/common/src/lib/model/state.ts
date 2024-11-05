import { User } from "./modelModule";

export class State {

    user: User | null = null;

    constructor() {
        
    }

    setUser(val: User) : State { 
        this.user = val;
        return this;
    }

    getUser() : User | null {
        return this.user;
    }
}