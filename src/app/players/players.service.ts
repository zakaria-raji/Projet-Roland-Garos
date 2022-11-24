import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";


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
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }),
  };

  // // GET
  // getPlayersOrderByName() {
  //
  //   console.log("before calling getPlayersOrderByName")
  //    let result = this.http
  //     .get(URL_API + 'player/all').subscribe( response =>{
  //        console.log(response )
  //      })
  //   return
  // }


  //get all Joueurs with criteria --> nom classement - sexe
  getPlayersOrderByName() {
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
