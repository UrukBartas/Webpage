import { Utils } from './../../utils/utils'
import { Component, HostListener, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import * as Aos from 'aos'
import * as $ from 'jquery'

import { Location } from '@angular/common'
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  public postAdventurer = false
  public adventurerVisibility = false

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.controlIntroductionHistory()
    this.controlIntroductionGates()
    this.controlMythicsScroll()
  }

  constructor(public router: Router, private location: Location) {}

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

    const trigger1: any = document.querySelector('#introduction .trigger-animation1')
    const trigger2: any = document.querySelector('#introduction .trigger-animation2')
    const trigger3: any = document.querySelector('#introduction .trigger-animation3')
    const trigger4: any = document.querySelector('#introduction .trigger-animation4')
    const trigger5: any = document.querySelector('#introduction .trigger-animation5')

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
  }

  private controlIntroductionGates() {
    const container: any = document.querySelector('#introduction .gates')
    const img: any = document.querySelector('#introduction .gates1')
    const trigger: any = document.querySelector('#introduction .trigger-gates')
    const visible = Utils.isElementInTarget(trigger)
    img.style.opacity = visible ? 1 : 0

    const target = $(window).scrollTop() + $(window).height() / 2
    const elementTop = $(trigger).offset().top
    const elementHeight = $(trigger).height()
    const elementBottom = elementTop + elementHeight

    const gatesInitialWidth = 30
    const gatesFinalWidth = 100
    const containerInitialBottom = 100
    const containerFinalBottom = -30
    if (visible) {
      const percentage = ((target - elementTop) / elementHeight) * 100
      const increaseWidth = ((gatesFinalWidth - gatesInitialWidth) * percentage) / 100
      const totalWidth = gatesInitialWidth + increaseWidth

      const decreaseBottom = ((containerFinalBottom - containerInitialBottom) * percentage) / 100
      const totalBottom = containerInitialBottom + decreaseBottom

      img.style.width = `${totalWidth}vw`
      container.style.bottom = `${totalBottom}px`
    }
  }

  private controlMythicsScroll() {
    const adventurer: any = document.querySelector('#mythics .adventurer')
    const trigger: any = document.querySelector('#mythics .trigger-adventurer')
    const background: any = document.querySelector('#cover .background-image-cover')

    const visible = Utils.isElementInTarget(trigger)

    if (this.adventurerVisibility && !visible) {
      this.postAdventurer = !this.postAdventurer
    }

    if (visible && !this.adventurerVisibility && !this.postAdventurer) {
      background.style.backgroundImage = 'url(/assets/wallpaper/dungeon.jpg)'
    } else if (!visible && this.adventurerVisibility && this.postAdventurer) {
      background.style.backgroundImage = 'url(/assets/wallpaper/forest4.jpg)'
    }

    this.adventurerVisibility = visible
    adventurer.style.opacity = visible ? '1' : '0'
  }
}
