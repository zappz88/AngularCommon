export class User {
    id: number = 0;
    userId: number = 0;
    username: string = "test";
    password: string = "";
    firstName: string = "";
    middleName: string = "";
    lastName: string = "";

    constructor() {
        
    }

    setId(val: number){
        this.id = val;
        return this;
    }

    setUserId(val: number){
        this.userId = val;
        return this;
    }

    setUsername(val: string){
        this.username = val;
        return this;
    }

    setPassword(val: string){
        this.password = val;
        return this;
    }

    setFirstName(val: string){
        this.firstName = val;
        return this;
    }

    setMiddleName(val: string){
        this.middleName = val;
        return this;
    }

    setLastName(val: string){
        this.lastName = val;
        return this;
    }
}