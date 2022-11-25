import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {C_Player} from "../player/C_Player";


const URL_API = environment.AUTH_API;
@Injectable({
  providedIn: 'root',
})
export class PLayersService{


  // Base url
  constructor(private http: HttpClient) {}


  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };

  // GET
  getPlayersOrderByName(): Observable<[]> {

    console.log("before calling getPlayersOrderByName")
    return this.http
      .get<[]>(URL_API + 'player/all')
  }


  //get all Joueurs with criteria --> nom classement - sexe
  getPlayersOrderByName2() {
    return [
      {
        'id': 1,
        'name': 'J.',
        'firstname': 'Kasintseva',
        'gender': 'Homme',
        'birthdate': '12/02/1990',
        'birthplace': 'El Palmar, Murcia, Espagne',
        'nationality': 'espagnole',
        'domHand': 'Droite',
        'beginningCareer': '1999',
        'playTime': 12,
        'height': '1.82 m',
        'weight': 75,
        'wonMatches': 12,
        'lostMatches': 1,
        'currentRank': 15,
        'bestRank': 8,
      },{
        'id': 1,
        'name': 'J.',
        'firstname': 'Kasintseva',
        'gender': 'Homme',
        'birthdate': '12/02/1990',
        'birthplace': 'El Palmar, Murcia, Espagne',
        'nationality': 'espagnole',
        'domHand': 'Droite',
        'beginningCareer': '1999',
        'playTime': 12,
        'height': '1.82 m',
        'weight': 75,
        'wonMatches': 12,
        'lostMatches': 1,
        'currentRank': 15,
        'bestRank': 8,
      }
    ]
  }

  getPlayersOrderByRank() {
    return [
      {
        'id': 1,
        'name': 'J.',
        'firstname': 'Kasintseva',
        'gender': 'Homme',
        'birthdate': '12/02/1990',
        'birthplace': 'El Palmar, Murcia, Espagne',
        'nationality': 'espagnole',
        'domHand': 'Droite',
        'beginningCareer': '1999',
        'playTime': 12,
        'height': '1.82 m',
        'weight': 75,
        'wonMatches': 12,
        'lostMatches': 1,
        'currentRank': 15,
        'bestRank': 8,
      }
    ]
  }

  // GET
  getPlayersMen(): Observable<[]> {

    //TODO : api must replace allByPlayTimeMen with allByPlayTimeWomen beccause allByPlayTimeMen is getting  Women not Men
    return this.http
      .get<[]>(URL_API + 'player/allByPlayTimeWomen')
  }
  // GET
  getPlayersWomen(): Observable<[]> {

    return this.http
      .get<[]>(URL_API + 'player/allByPlayTimeMen')
  }

  getPlayersOrderByGender() {
    return [
      {
        'id': 1,
        'name': 'J.',
        'firstname': 'Kasintseva',
        'gender': 'Homme',
        'birthdate': '12/02/1990',
        'birthplace': 'El Palmar, Murcia, Espagne',
        'nationality': 'espagnole',
        'domHand': 'Droite',
        'beginningCareer': '1999',
        'playTime': 12,
        'height': '1.82 m',
        'weight': 75,
        'wonMatches': 12,
        'lostMatches': 1,
        'currentRank': 15,
        'bestRank': 8,
      }
    ]
  }


  //TODO : Joueurs - matches remportés

  getPlayersMatchesDelayed() {
    return [
      {
        'id': 1,
        'name': 'J.',
        'firstname': 'Ka sMatchesDelayed',
        'gender': 'Homme',
        'birthdate': '12/02/1990',
        'birthplace': 'El Palmar, Murcia, Espagne',
        'nationality': 'espagnole',
        'domHand': 'Droite',
        'beginningCareer': '1999',
        'playTime': 12,
        'height': '1.82 m',
        'weight': 75,
        'wonMatches': 12,
        'lostMatches': 1,
        'currentRank': 15,
        'bestRank': 8,
      }
    ]
  }
  //TODO : Joueurs - durée de jeu totale


  getPlayersOrderByGameDuration() {
    return [
      {
        'id': 1,
        'name': 'J.',
        'firstname': 'Kasint GameDuration',
        'gender': 'Homme',
        'birthdate': '12/02/1990',
        'birthplace': 'El Palmar, Murcia, Espagne',
        'nationality': 'espagnole',
        'domHand': 'Droite',
        'beginningCareer': '1999',
        'playTime': 12,
        'height': '1.82 m',
        'weight': 75,
        'wonMatches': 12,
        'lostMatches': 1,
        'currentRank': 15,
        'bestRank': 8,
      }
    ]
  }




  //TODO : Optional : Joueurs - statistique - catégorie



}
