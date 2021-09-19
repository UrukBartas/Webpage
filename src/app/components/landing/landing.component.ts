import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import * as Aos from 'aos'
import * as $ from 'jquery'
import { environment } from '../../../environments/environment'
import { Location } from '@angular/common'
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  /* @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    [
      'cover',
      'introduction',
      'features',
      'ingame',
      'tokenomics',
      'roadmap',
      'buyToken',
      'whitepaper',
    ].forEach((name) => {
      let self: any = this;
      if (this.isScrolledIntoView((self[name] as ElementRef).nativeElement)) {
        let element = self[name] as ElementRef;
        console.log(element.nativeElement.id);
       this.router.navigate(["#"+element.nativeElement.id])
      }
    });
  } */

  /* @ViewChild('cover') cover!: ElementRef;
  @ViewChild('introduction') introduction!: ElementRef;
  @ViewChild('features') features!: ElementRef;
  @ViewChild('ingame') ingame!: ElementRef;
  @ViewChild('tokenomics') tokenomics!: ElementRef;
  @ViewChild('roadmap') roadmap!: ElementRef;
  @ViewChild('buyToken') buyToken!: ElementRef;
  @ViewChild('whitepaper') whitepaper!: ElementRef; */
  constructor(public router: Router, private location: Location) {}

  ngOnInit(): void {
    Aos.init({
      offset: 200,
      delay: 100,
    })
    /* let actualPath = this.router.url
    let splittenPath = actualPath.split('/')
    let idPath = splittenPath.findIndex((entry) => entry[0] && entry[0] == '#')
    if (idPath != -1) {
      let el = document.querySelector(splittenPath[idPath])
      if (el) el.scrollIntoView()
    } */
  }

  /* public isActive(path: string): boolean {
    let actualPath = this.router.url;
    let splittenPath = actualPath.split('/');
    let idPath = splittenPath.findIndex((entry) => entry == path);
    return idPath != -1;
  }

  public isScrolledIntoView(el: any) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
  } */
}
