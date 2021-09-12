import { Component, OnInit } from '@angular/core'
import * as Aos from 'aos'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    Aos.init({
      offset: 200,
      delay: 100,
    })
    const banner: any = document.querySelector('.cartel-play')
    document.addEventListener('scroll', (event) => {
      const position = window.scrollY
      if (position > 1000) {
        banner.style.visibility = 'visible'
      } else {
        banner.style.visibility = 'hidden'
      }
    })
  }
}
