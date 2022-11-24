import {Component, ContentChild, Directive, Input, OnInit} from '@angular/core';
import {MatchesService} from "./h-card.service";
import {month} from "../months-constants.module";
import {MatcheComponent} from "../matche/matche.component";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-h-card',
  templateUrl: './h-card.component.html',
  styleUrls: ['./h-card.component.css']
})


export class HCardComponent implements OnInit {
  matches;
  service;
  router;
  private _criteria: string;
  get criteria(): string {
    return this._criteria;
  }

  @Input('criteria')
  set criteria(criteria: string) {
    this._criteria = criteria;
    console.log('new value:', criteria); // <-- do your logic here!

    this.filter();
  }
  constructor(service: MatchesService, private rt : Router) {
    this.router = rt;
    this.matches = service.getMatches();
    this.service = service;
    this._criteria = 'all';
    this.filter();
  }

  filter(){
    switch (this._criteria){
      case 'termine' :
        this.matches = this.service.getMatchesTermine();
        break;

      case 'venir':
        this.matches = this.service.getMatchesVenir();
        break;
      default:
        this.matches = this.service.getMatches();
    }
  }

  day(data:string){
    let dt = new Date();
    return dt.getDay();
  }

  month(data:string){
    let dt = new Date();
    return month[dt.getMonth()];
  }



  clickHandler(id:number, index:number){
    console.log(id);
    let matche = this.matches[index];
    this.router.navigate(['matche',  matche])
  }

  ngOnInit(): void {
    this.filter();
  }

}
