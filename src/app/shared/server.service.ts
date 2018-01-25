import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import {Http,Response} from "@angular/http";
@Injectable()
export class serverService{
constructor(private http:Http){}

storeServer(servers: any[]){
return this.http.put("https://gameon-b935d.firebaseio.com/data.json",servers);
}

getServer(){
 return this.http.get("https://gameon-b935d.firebaseio.com/data.json")
 .map(
     (response: Response) => {
         const data = response.json();
         return data;
     }
 );
}
}