import { Component, OnInit } from '@angular/core';
import {MatchesService} from "../h-card/h-card.service";

@Component({
  selector: 'app-tournoi',
  templateUrl: './tournoi.component.html',
  styleUrls: ['./tournoi.component.css'],
})
export class TournoiComponent implements OnInit {
  matches;
  criteria;
  constructor(service: MatchesService) {
    this.matches = service.getMatches();
    this.criteria="all";
  }


  filtering(choice : string){
    console.log(choice)
    this.criteria=choice;
  }
  ngOnInit(): void {
  }

}
