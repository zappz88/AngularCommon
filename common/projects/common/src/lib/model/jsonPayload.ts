export class JsonPayload {

    data: any;

    constructor(data: any) {
        this.data = data;
    }

    setData(val: any) : JsonPayload {
        this.data = val;
        return this;
    }
}