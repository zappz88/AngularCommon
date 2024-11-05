import { 
    Encryptor 
} from "./encryptionModule";

export class Base64Encryptor extends Encryptor{

    override encrypt(val: string){
        return btoa(val);
    }
    
    override decrypt(val: string){
        return atob(val);
    }

}