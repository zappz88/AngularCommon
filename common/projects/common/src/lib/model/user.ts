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

    setId(val: number) : User {
        this.id = val;
        return this;
    }

    setUserId(val: number) : User {
        this.userId = val;
        return this;
    }

    setUsername(val: string) : User {
        this.username = val;
        return this;
    }

    setPassword(val: string) : User {
        this.password = val;
        return this;
    }

    setFirstName(val: string) : User {
        this.firstName = val;
        return this;
    }

    setMiddleName(val: string) : User {
        this.middleName = val;
        return this;
    }

    setLastName(val: string) : User {
        this.lastName = val;
        return this;
    }
}