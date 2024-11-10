import { ButtonType } from "../buttonType";

export class ButtonPressEvent {
    
    buttonType: ButtonType;
    data: any;

    constructor(buttonType: ButtonType, data: any) {
        this.buttonType = buttonType;
        this.data = data;
    }

    setButtonType(val: ButtonType){
        this.buttonType = val;
        return this;
    }

    setData(val: any){
        this.data = val;
        return this;
    }
}