import { Component, OnInit } from '@angular/core';
import {MatchesService} from "../h-card/h-card.service";
import {PLayersService} from "./players.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Page} from "./Page";



@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  pageIndex:number;//default ===> filter(name gender....) must be shown on the page
  players;
  router;
  service;
  aRoute;

  page;

  pa = [
    "Joueurs",
    "Joueurs - matches remportés",
    "Joueurs - durée de jeu totale"
  ]

  constructor( service: PLayersService,  private rt : ActivatedRoute, private rtt : Router) {
    this.aRoute = rt;
    this.router = rtt;
    this.service= service;
    this.page = this.aRoute.snapshot.paramMap.get('pageIndex');
    let nbr : number =  this.page==null || isNaN(Number.parseInt(this.page)) ? 0 : Number.parseInt(this.page);
    nbr = nbr >= this.pa.length ? 0: nbr;
    this.pageIndex = nbr;
    console.log(nbr);



    //filtereinng
    switch(this.pageIndex){
      case 1:
        this.players = service.getPlayersMatchesDelayed();//Default
        break;
      case 2:
        this.players = service.getPlayersOrderByGameDuration();//Default
        break;
      default:
        this.players = service.getPlayersOrderByName();//Default
    }

  }


  filter(criteria:string){
    switch(criteria){
      case "nom":
        this.players = this.service.getPlayersOrderByName();//Default
        break;

      case "classement" :
        this.players = this.service.getPlayersOrderByRank();//Default
        break;

      case "sexe" :
        this.players = this.service.getPlayersOrderByGender();//Default
        break;

    }
  }


  showPlayer(id:number){
    this.router.navigate(['player',  {'id':id}])
  }

  ngOnInit(): void {
  }

}
