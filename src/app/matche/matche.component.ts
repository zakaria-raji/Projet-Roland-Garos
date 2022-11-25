import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatchesService} from "../h-card/h-card.service";

@Component({
  selector: 'app-matche',
  templateUrl: './matche.component.html',
  styleUrls: ['./matche.component.css']
})
export class MatcheComponent implements OnInit {

  private _matche: any;
  router;
  aRoute;
  service;

  get matche(): any {
    return this._matche;
  }

  @Input('matche')
  set matche(matche : any) {
    this._matche = matche;
  }

  private _player1: any;
  get player1() {
    return this._player1;
  }

  set player1(player) {
    this._player1 = player;
  }

  private _player2: any;
  get player2() {
    return this._player2;
  }

  set player2(player) {
    this._player2 = player;
  }



  constructor( service: MatchesService, private rt : ActivatedRoute, private rtt : Router) {
    this.aRoute = rt;
    this.router = rtt;
    this.service = service;


  }

  ngOnInit(): void {
    this.aRoute.params.subscribe((params) =>
    {
      this.matche = params;
      this.service.getPlayerByID(this.matche.player1).subscribe(res=>{
        this.player1 = res;
      });
      this.service.getPlayerByID(this.matche.player2).subscribe(res=>{
        this.player2 = res;
      });
    });
  }





  clickHandler(id:number){
    this.router.navigate(['player',  {'id':id}])
  }

}
