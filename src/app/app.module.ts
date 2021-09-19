import { CoverComponent } from './components/landing/cover/cover.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { GameComponent } from './components/game/game.component';
import { InGameComponent } from './components/landing/in-game/in-game.component';
import { UnityWebappBridgeComponent } from './unity-webapp-bridge/unity-webapp-bridge.component';
import { RoadmapComponent } from './components/landing/roadmap/roadmap.component';
import { TeamComponent } from './components/landing/team/team.component';
import { BuyTokenComponent } from './components/landing/buy-token/buy-token.component';
import { FooterComponent } from './components/landing/footer/footer.component';
import { SwiperModule } from 'swiper/angular';
import { WhitepaperComponent } from './components/landing/whitepaper/whitepaper.component';
import { FeaturesComponent } from './components/landing/features/features.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IntroductionComponent } from './components/landing/introduction/introduction.component';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { TokenomicsComponent } from './components/landing/tokenomics/tokenomics.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { MatExpansionModule } from '@angular/material/expansion';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    GameComponent,
    CoverComponent,
    InGameComponent,
    UnityWebappBridgeComponent,
    RoadmapComponent,
    TeamComponent,
    BuyTokenComponent,
    FooterComponent,
    WhitepaperComponent,
    FeaturesComponent,
    IntroductionComponent,
    TokenomicsComponent,
  ],
  imports: [
    BrowserModule,
    PinchZoomModule,
    AppRoutingModule,
    SwiperModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
