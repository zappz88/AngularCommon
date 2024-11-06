import { 
    Encryptor, 
    Base64Encryptor 
} from "./encryptionModule";

export enum EncryptorType { BASIC, BASE64 }

export class EncryptorFactory {

    static getEncryptor(encryptorType: EncryptorType) : Encryptor {
        
        let encryptor: any = null;

        switch(encryptorType){
            case EncryptorType.BASIC:
                encryptor = new Encryptor();
                break;
            case EncryptorType.BASE64:
                encryptor = new Base64Encryptor();
                break;
            default:
                throw new Error("Not implemented exception.");
        }
        return encryptor;
    }

    static getEncryptorByString(encryptorTypeString: string) : Encryptor {
        
        let encryptor: any = null;

        switch(encryptorTypeString){
            case "BASIC":
                encryptor = new Encryptor();
                break;
            case "BASE64":
                encryptor = new Base64Encryptor();
                break;
            default:
                throw new Error("Not implemented exception.");
        }
        return encryptor;
    }
}