import { Component } from '@angular/core';

@Component({
  selector: 'app-presale-redirect',
  templateUrl: './presale-redirect.component.html',
  styleUrl: './presale-redirect.component.scss',
})
export class PresaleRedirectComponent {
  constructor() {
    window.location.href = 'https://game.urukbartas.com/presale';
  }
}
