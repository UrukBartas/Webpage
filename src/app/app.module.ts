import { CoverComponent } from './components/landing/main/components/cover/cover.component'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LandingComponent } from './components/landing/landing.component'
import { GameComponent } from './components/game/game.component'
import { InGameComponent } from './components/landing/main/components/in-game/in-game.component'
import { RoadmapComponent } from './components/landing/main/components/roadmap/roadmap.component'
import { TeamComponent } from './components/landing/main/components/team/team.component'
import { BuyTokenComponent } from './components/landing/main/components/buy-token/buy-token.component'
import { FooterComponent } from './components/landing/footer/footer.component'
import { SwiperModule } from 'swiper/angular'
import { WhitepaperComponent } from './components/landing/main/components/whitepaper/whitepaper.component'
import { FeaturesComponent } from './components/landing/main/components/features/features.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatChipsModule } from '@angular/material/chips'
import { IntroductionComponent } from './components/landing/main/components/introduction/introduction.component'
import { PinchZoomModule } from 'ngx-pinch-zoom'
import { TokenomicsComponent } from './components/landing/main/components/tokenomics/tokenomics.component'
import { NgxEchartsModule } from 'ngx-echarts'
import { MatExpansionModule } from '@angular/material/expansion'
import { MobileMenuComponent } from './components/landing/mobile-menu/mobile-menu.component'
import { MythicsComponent } from './components/landing/main/components/mythics/mythics.component'
import { LootBoxesComponent } from './components/loot-boxes/loot-boxes.component'
import { NftCardComponent } from './components/nft-card/nft-card.component'
import { PresaleComponent } from './components/landing/presale/presale.component'
import { MainComponent } from './components/landing/main/main.component'
import { ToastrModule } from 'ngx-toastr'
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
    WhitepaperComponent,
    FeaturesComponent,
    IntroductionComponent,
    TokenomicsComponent,
    MobileMenuComponent,
    MythicsComponent,
    LootBoxesComponent,
    NftCardComponent,
    PresaleComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    PinchZoomModule,
    AppRoutingModule,
    SwiperModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatExpansionModule,
    ToastrModule.forRoot(),
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
