import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import {TestComponent} from "./test/test.component";
import {TestSerice} from "./test/test.service";
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TournoiComponent } from './tournoi/tournoi.component';
import { HCardComponent } from './h-card/h-card.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderCoverComponent } from './header-cover/header-cover.component';
import {MatchesService} from "./h-card/h-card.service";
import { MatcheComponent } from './matche/matche.component';
import { PlayerComponent } from './player/player.component';
import {PlayerService} from "./player/player.service";
import { CgvComponent } from './cgv/cgv.component';
import { PlayersComponent } from './players/players.component';
import {PLayersService} from "./players/players.service";
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardContainerComponent } from './dashboard/dashboard-container/dashboard-container.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    TournoiComponent,
    HCardComponent,
    HomePageComponent,
    HeaderCoverComponent,
    MatcheComponent,
    PlayerComponent,
    CgvComponent,
    PlayersComponent,
    LoginComponent,
    PagenotfoundComponent,
    DashboardContainerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent},
      { path: 'tournoi', component: TournoiComponent},
      { path: 'matche', component: MatcheComponent},
      { path: 'player', component: PlayerComponent},
      { path: 'cgv', component: CgvComponent},
      { path: 'players', component: PlayersComponent},
      { path: 'players/:pageIndex', component: PlayersComponent},
      { path: 'login', component: LoginComponent},




      { path: 'dashboard', component: DashboardContainerComponent},

      //Wild Card Route for 404 request
      { path: '**', pathMatch: 'full',
        component: PagenotfoundComponent },

    ]),

    HttpClientModule,
  ],
  providers: [
    // dependency injection
    // singleton
    TestSerice,
    MatchesService,
    PlayerService,
    PLayersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
