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
        service.getPlayersOrderByName().subscribe( response =>{

          this.players = response;

          for(let i=0; i<this.players.length;i++){
            console.log(this.players[i].id)
          }
        });//Default
    }


  }


  filter(criteria:string){
    switch(criteria){
      case "nom":
        this.service.getPlayersOrderByName().subscribe(res=>{
          this.players = res;
        })
        break;

      case "classement" :
        this.service.getPlayersOrderByName().subscribe(res=>{
          let sortedPplayer = res.sort(
            (p1, p2) => (p1['rank'] < p2['rank'] ) ? 1 : (p1['rank']  > p2['rank'] ) ? -1 : 0);
          this.players = sortedPplayer;
        });//Default
        break;

      case "men" :
        this.service.getPlayersMen().subscribe(res=>{
          this.players = res;
        })
        break;

      case "women" :
        this.service.getPlayersWomen().subscribe(res=>{
          this.players = res;
        })
        break;

    }
  }


  showPlayer(id:number){
    this.router.navigate(['player',  {'id':id}])
  }

  ngOnInit(): void {
  }

}
