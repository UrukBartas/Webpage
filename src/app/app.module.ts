import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CoverComponent } from './components/cover/cover.component'
import { AboutGameComponent } from './components/about-game/about-game.component'
import { FooterComponent } from './components/footer/footer.component'

@NgModule({
  declarations: [AppComponent, CoverComponent, AboutGameComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
