import { 
    Encryptor 
} from "./encryptionModule";

export class Base64Encryptor extends Encryptor {

    override encrypt(val: string) : string {
        return btoa(val);
    }
    
    override decrypt(val: string) : string {
        return atob(val);
    }

}