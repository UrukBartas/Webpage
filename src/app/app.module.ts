import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PinchZoomModule } from '@meddv/ngx-pinch-zoom';
import { ClipboardModule } from 'ngx-clipboard';
import { ToastrModule } from 'ngx-toastr';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/landing/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { CoverComponent } from './components/landing/main/components/cover/cover.component';
import { InGameComponent } from './components/landing/main/components/in-game/in-game.component';
import { IntroductionComponent } from './components/landing/main/components/introduction/introduction.component';
import { RoadmapComponent } from './components/landing/main/components/roadmap/roadmap.component';
import { WhitepaperComponent } from './components/landing/main/components/whitepaper/whitepaper.component';
import { MainComponent } from './components/landing/main/main.component';
import { MobileMenuComponent } from './components/landing/mobile-menu/mobile-menu.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    CoverComponent,
    InGameComponent,
    RoadmapComponent,
    FooterComponent,
    WhitepaperComponent,
    IntroductionComponent,
    MobileMenuComponent,
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
    ClipboardModule,
    MatDividerModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
