import { CoverComponent } from './components/landing/cover/cover.component'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LandingComponent } from './components/landing/landing.component'
import { GameComponent } from './components/game/game.component'
import { InGameComponent } from './components/landing/in-game/in-game.component'
import { RoadmapComponent } from './components/landing/roadmap/roadmap.component'
import { TeamComponent } from './components/landing/team/team.component'
import { BuyTokenComponent } from './components/landing/buy-token/buy-token.component'
import { FooterComponent } from './components/landing/footer/footer.component'
import { SwiperModule } from 'swiper/angular'

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    GameComponent,
    CoverComponent,
    InGameComponent,
    RoadmapComponent,
    TeamComponent,
    BuyTokenComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
