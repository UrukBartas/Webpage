import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'uruk-bartas';

  constructor(){
  }

  public isGameRoute():boolean{
    return window.location.pathname === "/game"
  }
}
