import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Aos from 'aos';
import * as $ from 'jquery';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  private previousPosition: number = 0;
  private showing = false;

  constructor(public router: Router) {}

  ngOnInit(): void {
    Aos.init({
      offset: 200,
      delay: 100,
    });
    let actualPath = this.router.url;
    let splittenPath = actualPath.split('/');
    let idPath = splittenPath.findIndex((entry) => entry[0] && entry[0] == '#');
    if (idPath != -1) {
      let el = document.querySelector(splittenPath[idPath]);
      if (el) el.scrollIntoView();
    }
  }

  public isActive(path: string): boolean {
    let actualPath = this.router.url;
    let splittenPath = actualPath.split('/');
    let idPath = splittenPath.findIndex((entry) => entry == path);
    return idPath != -1;
  }
}
