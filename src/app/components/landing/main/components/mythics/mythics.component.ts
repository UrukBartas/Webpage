import { Component, ViewEncapsulation } from '@angular/core'
import { SwiperOptions } from 'swiper'

@Component({
  selector: 'app-mythics',
  templateUrl: './mythics.component.html',
  styleUrls: ['./mythics.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MythicsComponent {
  constructor() {}

  get isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  }

  public config: SwiperOptions = {
    effect: 'coverflow',
    slidesPerView: this.isMobile ? 'auto' : 3,
    grabCursor: true,
    spaceBetween: 50,
    centeredSlides: true,
    navigation: true,
    pagination: false,
    initialSlide: 0,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
  }
}
