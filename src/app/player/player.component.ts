import { Component, OnInit } from '@angular/core';
import {PlayerService} from "./player.service";
import {MatchesService} from "../h-card/h-card.service";
import {ActivatedRoute, Router} from "@angular/router";
import * as moment from "moment/moment";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  id:any;
  player:any;
  age;
  aRoute;
  constructor(service: PlayerService , private rt : ActivatedRoute) {
  this.aRoute = rt;
  this.aRoute.params.subscribe((params) =>
{
  this.id = params['id'];
})

    service.getPlayerByID(this.id).subscribe(res=>{
      this.player = res;
    });
  this.age= this.CalculateAge();
console.log(this.player);
  }

  ngOnInit(): void {
  }



  public CalculateAge()
  {
    if(this.player?.birthdate){
      let days = moment().diff(this.player.birthdate, 'days');
      return days/365;
    }else{//error case
      return 0;
    }
  }
}
