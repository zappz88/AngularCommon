export class JsonPayload{

    data: any;

    constructor(data: any) {
        this.data = data;
    }

    setData(val: any){
        this.data = val;
        return this;
    }
}