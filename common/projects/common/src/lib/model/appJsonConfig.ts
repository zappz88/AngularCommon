import { HttpClient } from "@angular/common/http";

export class AppJsonConfig {
    encryptor: string = "BASIC";
    sessionTimeout: number = 15;
    userServiceUri: string = "https://localhost:7117/api/User";

    constructor(data?: any) {
        if(data){
            this.encryptor = data.Encryptor;
            this.sessionTimeout = data.SessionTimeout;
            this.userServiceUri = data.UserServiceUri;
        }
    }
}