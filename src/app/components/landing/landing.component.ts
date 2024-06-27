import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
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
  private http = inject(HttpClient);
  public router = inject(Router);
  constructor() {}

  downloadFile() {
    const url =
      'https://raw.githubusercontent.com/UrukBartas/Game/main/README.md';
    const fileName = 'README.md';

    this.http.get(url, { responseType: 'blob' }).subscribe(
      (blob) => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
        window.URL.revokeObjectURL(link.href);
      },
      (error) => {
        console.error('Error downloading the file', error);
      }
    );
  }
}
