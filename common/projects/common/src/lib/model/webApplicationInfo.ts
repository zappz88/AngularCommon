export class WebApplicationInfo {

    name: string = '';
    uri: string = '';

    constructor() {
        
    }

    setName(val: string) : WebApplicationInfo {
        this.name = val;
        return this;
    }

    setUri(val: string) : WebApplicationInfo {
        this.uri = val;
        return this;
    }
}