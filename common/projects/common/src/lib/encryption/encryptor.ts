export class Encryptor {
    key: string = 'ADMIN';

    encrypt(val: string) : string {
        if(val === null || val === ''){
            return val;
        }
        let result: number[] = [];
        for(let i = 0, j = 0; j < val.length; i++, j++){
            if(i === this.key.length){
                i = 0;
            }
            const keyCharCode: number = this.key.charCodeAt(i);
            const valCharCode: number = val.charCodeAt(j);
            result.push(keyCharCode * valCharCode);
        }
        return result.join(",");
    }
    
    decrypt(val: string) : string {
        if(val === null || val === ''){
            return val;
        }
        let result: number[] = [];
        let valArray = val.length > 1 ? val.split(",") : val;
        for(let i = 0, j = 0; j < valArray.length; i++, j++){
            if(i === this.key.length){
                i = 0;
            }
            const valCharCode: number  = parseInt(valArray[j]);
            const keyCharCode: number  = this.key.charCodeAt(i);
            result.push(valCharCode / keyCharCode);
        }
        return result.map((item) => String.fromCharCode(item)).join("");
    }
}