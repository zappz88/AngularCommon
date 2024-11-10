import appjson from '../../app.json';

export class AppJsonConfigBase {
    encryptor: string = "BASIC";
    sessionTimeout: number = 15;
    userServiceUri: string = "https://localhost:7117/api/User";

    constructor(data?: any) {
        if(data){
            this.encryptor = data.Encryptor || appjson.Encryptor;
            this.sessionTimeout = data.SessionTimeout || appjson.SessionTimeout;
            this.userServiceUri = data.UserServiceUri || appjson.UserServiceUri;
        }
    }
}