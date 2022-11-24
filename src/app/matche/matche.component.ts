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

  get matche(): any {
    return this._matche;
  }

  @Input('matche')
  set matche(matche : any) {
    this._matche = matche;
  }

  private _teams: any;
  get teams() {
    return this._teams;
  }

  @Input('team1')
  set teams(teams) {
    this._teams = teams;
  }



  constructor( service: MatchesService, private rt : ActivatedRoute, private rtt : Router) {
    this.aRoute = rt;
    this.router = rtt;
    this.aRoute.params.subscribe((params) =>
    {
      this.matche = params;
      this.teams = service.getMatchePlayers(this.matche.id);
    });


  }

  ngOnInit(): void {

  }





  clickHandler(id:number){
    this.router.navigate(['player',  {'id':id}])
  }

}
