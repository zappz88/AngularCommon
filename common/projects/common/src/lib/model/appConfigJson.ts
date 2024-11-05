import data from "../app.json";

export class AppConfigJson {
    data: any = null;
    encryptor: string = "BASIC";
    userServiceUri: string = "https://localhost:7117/api/User";

    constructor() {
        this.getConfig();
        this.encryptor = this.data.Encryptor;
        this.userServiceUri = this.data.UserServiceUri;
    }

    getConfig(){
        this.data = data;
        return this;
    }
}