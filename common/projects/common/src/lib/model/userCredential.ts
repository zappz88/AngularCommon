import { Credential } from "./modelModule";

export class UserCredential extends Credential {

    constructor(userName: string, password: string) {
        super(userName, password);
    }
}