import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import * as Aos from 'aos'
import * as $ from 'jquery'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  private previousPosition: number = 0
  private showing = false

  constructor(public router: Router) {}

  ngOnInit(): void {
    Aos.init({
      offset: 200,
      delay: 100,
    })
    this.controlPlayPosterAnimation()
  }

  private controlPlayPosterAnimation() {
    const banner: any = document.querySelector('.cartel-play')
    document.addEventListener('scroll', (event) => {
      const currentPosition = window.scrollY
      const limit = window.innerHeight
      const show = currentPosition > limit && this.previousPosition < currentPosition
      const hide = currentPosition < limit && this.previousPosition > currentPosition
      if (show && !this.showing) {
        this.showing = true
        banner.style.visibility = 'visible'
        banner.classList.remove('hide-cartel-play')
        banner.classList.add('display-cartel-play')
      }
      if (hide && this.showing) {
        this.showing = false
        banner.classList.remove('display-cartel-play')
        banner.classList.add('hide-cartel-play')
        setTimeout(() => {
          banner.style.visibility = 'hidden'
        }, 900)
      }
      this.previousPosition = currentPosition
    })
  }
}
