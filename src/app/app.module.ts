import { CoverComponent } from './components/landing/cover/cover.component'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LandingComponent } from './components/landing/landing.component'
import { GameComponent } from './components/game/game.component';
import { InGameComponent } from './components/landing/in-game/in-game.component'

@NgModule({
  declarations: [AppComponent, LandingComponent, GameComponent, CoverComponent, InGameComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
