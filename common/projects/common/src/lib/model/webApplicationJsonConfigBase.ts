import appjson from '../../web-applications.json';
import { WebApplicationInfo } from './webApplicationInfo';

export class WebApplicationJsonConfigBase {

    webApplicationInfos: WebApplicationInfo[] = [];

    constructor(data?: any) {
        if(data){
            this.webApplicationInfos = data.map((entry: any) => {
                return new WebApplicationInfo()
                    .setName(entry.Name)
                    .setUri(entry.Uri)
            });
        }
        else{
            this.webApplicationInfos = appjson.map((entry: any) => {
                return new WebApplicationInfo()
                    .setName(entry.Name)
                    .setUri(entry.Uri)
            });
        }
    }
}