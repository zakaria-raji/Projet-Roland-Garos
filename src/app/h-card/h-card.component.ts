import {Component, ContentChild, Directive, Input, OnInit} from '@angular/core';
import {MatchesService} from "./h-card.service";
import {month} from "../months-constants.module";
import {MatcheComponent} from "../matche/matche.component";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as moment from "moment/moment";

@Component({
  selector: 'app-h-card',
  templateUrl: './h-card.component.html',
  styleUrls: ['./h-card.component.css']
})


export class HCardComponent implements OnInit {
  matches: any[] | null;
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
    this.matches = null;
    this.router = rt;
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
        this.service.getAllMatches().subscribe(resp=>{
          this.matches = resp;
        });
    }
  }

  day(data:string){
    let dt = moment(data,'DD-MM-YYYY');
    return dt.day();
  }

  month(data:string){
    console.log(data)
    let dt = moment(data,'DD-MM-YYYY');
    return dt.format("MMM");
  }



  clickHandler(id:number, index:number){
    console.log(id);
    if(this.matches != null ){
      let matche = this.matches[index];
      this.router.navigate(['matche',  matche])
    }

  }


  //
  //
  // getPlayers(){
  //  let  lgt = this.matches ==null ? 0:this.matches.length;
  //   for(let i=0; i< lgt ; i++){
  //     let ar = []
  //      // @ts-ignore
  //     this.service.getPlayerByID(this.matches.player1).subscribe(res=>{
  //       ar.push(res);
  //     })
  //     // @ts-ignore
  //     this.service.getPlayerByID(this.matches.player2).subscribe(res=>{
  //       ar.push(res);
  //     })
  //
  //   }
  //
  // }

  ngOnInit(): void {
  }

}
