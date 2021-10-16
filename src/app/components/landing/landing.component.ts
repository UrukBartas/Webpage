import { Utils } from './../../utils/utils'
import { Component, HostListener, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import * as Aos from 'aos'
import * as $ from 'jquery'

export enum LANDPAGE_LOCATIONS {
  MAIN = 'main',
  PRESALE = 'presale',
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  public location = LANDPAGE_LOCATIONS.PRESALE
  public locations = LANDPAGE_LOCATIONS
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.controlIntroductionHistory()
    this.controlMythicsScroll()
  }

  constructor(public router: Router) {}

  ngOnInit(): void {
    Aos.init({
      offset: 200,
      delay: 100,
    })
  }

  private controlIntroductionHistory() {
    const wizard: any = document.querySelector('#introduction .display-wizard')
    const coin: any = document.querySelector('#introduction .coin')
    const item: any = document.querySelector('#introduction .item')

    const text1: any = document.querySelector('#introduction .text1')
    const text2: any = document.querySelector('#introduction .text2')
    const text3: any = document.querySelector('#introduction .text3')
    const text4: any = document.querySelector('#introduction .text4')
    const text5: any = document.querySelector('#introduction .text5')

    const trigger1 = document.querySelector('#introduction .trigger-animation1')
    const trigger2 = document.querySelector('#introduction .trigger-animation2')
    const trigger3 = document.querySelector('#introduction .trigger-animation3')
    const trigger4 = document.querySelector('#introduction .trigger-animation4')
    const trigger5 = document.querySelector('#introduction .trigger-animation5')

    const visible1 = Utils.isElementInTarget(trigger1)
    const visible2 = Utils.isElementInTarget(trigger2)
    const visible3 = Utils.isElementInTarget(trigger3)
    const visible4 = Utils.isElementInTarget(trigger4)
    const visible5 = Utils.isElementInTarget(trigger5)

    wizard.style.opacity = visible1 || visible2 || visible3 || visible4 || visible5 ? '1' : '0'
    text1.style.opacity = visible1 ? 1 : 0
    text2.style.opacity = visible2 ? 1 : 0
    text3.style.opacity = visible3 ? 1 : 0
    text4.style.opacity = visible4 ? 1 : 0
    text5.style.opacity = visible5 ? 1 : 0
    coin.style.opacity = visible4 ? 1 : 0
    item.style.opacity = visible3 ? 1 : 0

    this.controlBackground(trigger5)
  }

  private controlBackground(trigger5) {
    const background: any = document.querySelector('#cover .background-image-cover')
    const target = $(window).scrollTop() + $(window).height() / 2
    const elementBottom = $(trigger5).offset().top + $(trigger5).height()
    if (target > elementBottom) {
      background.style.backgroundImage = 'url(/assets/wallpaper/dungeon.jpg)'
    } else {
      background.style.backgroundImage = 'url(/assets/wallpaper/forest.jpg)'
    }
  }

  private controlMythicsScroll() {
    const adventurer: any = document.querySelector('#mythics .adventurer')
    const trigger: any = document.querySelector('#mythics .trigger-adventurer')
    const visible = Utils.isElementInTarget(trigger)
    adventurer.style.opacity = visible ? '1' : '0'
  }
}
