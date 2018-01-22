import { EventEmitter } from "@angular/core";
import { gameListModel } from "./gameList.model";

export class gameListService{

    gameEmiter = new EventEmitter<gameListModel>();

    private gameList: gameListModel[] = [
        new gameListModel('batman'
        ,'this game is in gotham city, which is a very big city with alots of secrets in alleys'
        ,'http://d1vnh8mbrp67em.cloudfront.net/image/file/6/14/68626/maxresdefault.jpg'),
        new gameListModel('GTA5'
        ,"Grand Theft Auto V is an action-adventure video game developed by Rockstar North and published by Rockstar Games. It was released in September 2013 for PlayStation 3 and Xbox 360, in November 2014 for PlayStation 4 and Xbox One, and in April 2015 for Microsoft Windows. It is the first main entry in the Grand Theft Auto series since 2008's Grand Theft Auto IV. Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three criminals and their efforts to commit heists while under pressure from a government agency. The open world design lets players freely roam San Andreas' open countryside and the fictional city of Los Santos, based on Los Angeles"
        ,'https://news4c.com/wp-content/uploads/2017/09/GTA-5-APK-Android.jpg')
    ];

    getGameList(){
        return this.gameList.slice();
    }
    getList(index:number){
        return this.gameList[index];
    }
}