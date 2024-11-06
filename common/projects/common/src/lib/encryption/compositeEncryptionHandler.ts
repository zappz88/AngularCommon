import { 
    EncryptorFactory, 
    EncryptorType 
} from "./encryptionModule";

export class CompositeEncryptionHandler {

    static encrypt(val: string, ...encryptorTypeArray: EncryptorType[]) : string {
        let result = val;
        for(let i = 0; i < encryptorTypeArray.length; i++) 
        {
            result = EncryptorFactory.getEncryptor(encryptorTypeArray[i]).encrypt(result);
        }
        return result;
    }

    static decrypt(val: string, ...encryptorTypeArray: EncryptorType[]) : string {
        let result = val;
        for(let i = 0; i < encryptorTypeArray.length; i++) 
        {
            result = EncryptorFactory.getEncryptor(encryptorTypeArray[i]).decrypt(result);
        }
        return result;
    }

    static encryptByString(val: string, ...encryptorStringArray: string[]) : string {
        let result = val;
        for(let encryptorString in encryptorStringArray) 
        {
            result = EncryptorFactory.getEncryptorByString(encryptorString).encrypt(result);
        }
        return result;
    }

    static decryptByString(val: string, ...encryptorStringArray: string[]) : string {
        let result = val;
        for(let encryptorString in encryptorStringArray) 
        {
            result = EncryptorFactory.getEncryptorByString(encryptorString).decrypt(result);
        }
        return result;
    }
}