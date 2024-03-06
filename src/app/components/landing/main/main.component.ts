import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Aos from 'aos';
import { Utils } from '../utils/utils';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.controlIntroductionHistory();
    this.controlMythicsScroll();
  }

  constructor(public router: Router) {}

  ngOnInit(): void {
    Aos.init({
      offset: 200,
      delay: 100,
    });
  }

  private controlIntroductionHistory() {
    const wizard: any = document.querySelector('#introduction .display-wizard');
    const coin: any = document.querySelector('#introduction .coin');
    const item: any = document.querySelector('#introduction .item');

    const text1: any = document.querySelector('#introduction .text1');
    const text2: any = document.querySelector('#introduction .text2');
    const text3: any = document.querySelector('#introduction .text3');
    const text4: any = document.querySelector('#introduction .text4');
    const text5: any = document.querySelector('#introduction .text5');

    const trigger1 = document.querySelector(
      '#introduction .trigger-animation1'
    );
    const trigger2 = document.querySelector(
      '#introduction .trigger-animation2'
    );
    const trigger3 = document.querySelector(
      '#introduction .trigger-animation3'
    );
    const trigger4 = document.querySelector(
      '#introduction .trigger-animation4'
    );
    const trigger5 = document.querySelector(
      '#introduction .trigger-animation5'
    );

    const visible1 = Utils.isElementInTarget(trigger1);
    const visible2 = Utils.isElementInTarget(trigger2);
    const visible3 = Utils.isElementInTarget(trigger3);
    const visible4 = Utils.isElementInTarget(trigger4);
    const visible5 = Utils.isElementInTarget(trigger5);

    wizard.style.opacity =
      visible1 || visible2 || visible3 || visible4 || visible5 ? '1' : '0';
    text1.style.opacity = visible1 ? 1 : 0;
    text2.style.opacity = visible2 ? 1 : 0;
    text3.style.opacity = visible3 ? 1 : 0;
    text4.style.opacity = visible4 ? 1 : 0;
    text5.style.opacity = visible5 ? 1 : 0;
    coin.style.opacity = visible4 ? 1 : 0;
    item.style.opacity = visible3 ? 1 : 0;

    this.controlBackground(trigger5);
  }

  private controlBackground(trigger5) {
    const background: HTMLElement | null = document.querySelector(
      '#landing .background-image-cover'
    );
    const target = window.scrollY + window.innerHeight / 2;
    const trigger5Rect = trigger5.getBoundingClientRect();
    const trigger5Top = trigger5Rect.top + window.scrollY;
    const elementBottom = trigger5Top + trigger5Rect.height;

    if (background) {
      if (target > elementBottom) {
        background.style.backgroundImage = 'url(/assets/wallpaper/dungeon.jpg)';
      } else {
        background.style.backgroundImage = 'url(/assets/wallpaper/field.png)';
      }
    }
  }

  private controlMythicsScroll() {
    const adventurer: any = document.querySelector('#mythics .adventurer');
    const trigger: any = document.querySelector('#mythics .trigger-adventurer');
    const visible = Utils.isElementInTarget(trigger);
    adventurer.style.opacity = visible ? '1' : '0';
  }
}
