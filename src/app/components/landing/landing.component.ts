import { Component } from '@angular/core'

export enum LANDPAGE_LOCATIONS {
  MAIN = 'main',
  PRESALE = 'presale',
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  public location = LANDPAGE_LOCATIONS.MAIN
  public locations = LANDPAGE_LOCATIONS

  constructor() {}
}
