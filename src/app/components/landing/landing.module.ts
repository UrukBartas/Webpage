import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { PinchZoomModule } from '@meddv/ngx-pinch-zoom';
import { ClipboardModule } from 'ngx-clipboard';
import { FooterComponent } from './footer/footer.component';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { CoverComponent } from './main/components/cover/cover.component';
import { InGameComponent } from './main/components/in-game/in-game.component';
import { IntroductionComponent } from './main/components/introduction/introduction.component';
import { PresaleRedirectComponent } from './main/components/presale-redirect/presale-redirect.component';
import { WhitepaperComponent } from './main/components/whitepaper/whitepaper.component';
import { MainComponent } from './main/main.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';

@NgModule({
  declarations: [
    LandingComponent,
    CoverComponent,
    InGameComponent,
    FooterComponent,
    WhitepaperComponent,
    IntroductionComponent,
    MobileMenuComponent,
    MainComponent,
    PresaleRedirectComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    PinchZoomModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatExpansionModule,
    ClipboardModule,
    MatDividerModule,
    LandingRoutingModule,
  ],
  providers: [],
})
export class LandingModule {}
