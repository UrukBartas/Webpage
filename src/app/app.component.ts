import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'uruk-bartas';
  public enableGameEnv = false;
  constructor() {
    this.enableGameEnv = environment.enableGame;
  }

  ngOnInit() {}

  public isGameRoute(): boolean {
    return window.location.pathname === '/game';
  }
}
