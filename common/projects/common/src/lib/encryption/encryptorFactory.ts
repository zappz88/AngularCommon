import { 
    Encryptor, 
    Base64Encryptor 
} from "./encryptionModule";

export enum EncryptorType { Basic, Base64 }

export class EncryptorFactory{

    static getEncryptor(encryptorType: EncryptorType){
        
        let encryptor: any = null;

        switch(encryptorType){
            case EncryptorType.Basic:
                encryptor = new Encryptor();
                break;
            case EncryptorType.Base64:
                encryptor = new Base64Encryptor();
                break;
            default:
                throw new Error("Not implemented exception.");
        }
        return encryptor;
    }

    static getEncryptorByString(encryptorTypeString: string){
        
        let encryptor: any = null;

        switch(encryptorTypeString){
            case "Basic":
                encryptor = new Encryptor();
                break;
            case "Base64":
                encryptor = new Base64Encryptor();
                break;
            default:
                throw new Error("Not implemented exception.");
        }
        return encryptor;
    }
}