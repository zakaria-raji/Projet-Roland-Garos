import { Component, OnInit } from '@angular/core';
import {MatchesService} from "../h-card/h-card.service";

@Component({
  selector: 'app-tournoi',
  templateUrl: './tournoi.component.html',
  styleUrls: ['./tournoi.component.css'],
})
export class TournoiComponent implements OnInit {
  // @ts-ignore
  matches;
  criteria;
  constructor(service: MatchesService) {
    service.getAllMatches().subscribe(resp=>{
      this.matches = resp;
    })
    this.criteria="all";
  }


  filtering(choice : string){
    console.log(choice)
    this.criteria=choice;
  }
  ngOnInit(): void {
  }

}
