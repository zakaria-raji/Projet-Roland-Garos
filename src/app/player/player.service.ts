import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";


const URL_API = environment.AUTH_API;
@Injectable()

export class PlayerService{


  // Base url
  constructor(private http: HttpClient) {}


  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };

  getPlayerByID(id:any){
    console.log("before calling getPlayersOrderByNam "+id)
    return this.http
      .get(URL_API + 'player/find/'+id);
  }




}
