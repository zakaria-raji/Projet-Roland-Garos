import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";


const URL_API = environment.AUTH_API;
@Injectable({
  providedIn: 'root',
})
export class MatchesService {


  // Base url
  constructor(private http: HttpClient) {
  }


  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };


  // GET
  getAllMatches(): Observable<[]> {

    console.log("before calling getPlayersOrderByName")
    return this.http
      .get<[]>(URL_API + 'match/all')
  }
}
