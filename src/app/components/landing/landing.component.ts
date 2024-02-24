import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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
  public location = LANDPAGE_LOCATIONS.MAIN;
  public locations = LANDPAGE_LOCATIONS;
  private toast = inject(ToastrService);
  constructor() {}

  public playnow() {
    this.toast.info('soon™ 😅', undefined, {
      positionClass: 'toast-top-right',
      progressBar: true,
    });
  }
}
