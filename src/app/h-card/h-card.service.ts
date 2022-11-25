import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";


const URL_API = environment.AUTH_API;
@Injectable({
  providedIn: 'root',
})
export class MatchesService{


  // Base url
  constructor(private http: HttpClient) {}


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


  getPlayerByID(id:any){
    console.log("before calling getPlayersOrderByName "+id)
    return this.http
      .get(URL_API + 'player/find/'+id);
  }

  //Old Methodes For testing purpose
  getMatchesTermine(){
    return [
      {
        'id' : 3,
        'date': "02-02-2022",
        'type': true, //true=single, false=double
        'gender': "man", //true=man, false=women
        'score': '3 2 1',

      },
      {
        'id' : 7,
        'date': "22-11-2022",
        'type': true, //true=single, false=double
        'gender': "man", //true=man, false=women
        'score': '4 2 1',

      },
      {
        'id' : 8,
        'date': "22-11-2022",
        'type': true, //true=single, false=double
        'gender': "man", //true=man, false=women
        'score': '1 2 3',

      }
    ];
  }


  getMatchesVenir(){
    return [
      {
        'id' : 1,
        'date': "02-02-2022",
        'type': true, //true=single, false=double
        'gender': "man", //true=man, false=women
        'score': '',

      },
      {
        'id' : 2,
        'date': "22-11-2022",
        'type': true, //true=single, false=double
        'gender': "man", //true=man, false=women
        'score': '',

      },
      {
        'id' : 4,
        'date': "22-11-2022",
        'type': true, //true=single, false=double
        'gender': "man", //true=man, false=women
        'score': '',


      },
      {
        'id' : 5,
        'date': "22-11-2022",
        'type': true, //true=single, false=double
        'gender': "man", //true=man, false=women
        'score': '',

      },
    ];
  }


getMatchePlayers(idMatche:number){
  return (
    {'team1' : [
        {
          'id':1,
          'name' : 'klane',
          'firstname' : 'stuf'
        }
      ],
      'team2' : [
        {
          'id':2,
          'name' : 'Jean der var',
          'firstname' : 'staint'
        }
      ]
    }
  );
}





}
