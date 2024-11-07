import { User } from "./modelModule";

export class State {

    isLoggedIn: boolean = false;

    user: User | null = null;

    constructor() {
        
    }
}