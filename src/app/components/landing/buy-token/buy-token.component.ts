import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core'
import { EffectCoverflow, Navigation, Pagination, SwiperOptions } from 'swiper'
import SwiperCore from 'swiper'

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Navigation])
@Component({
  selector: 'app-buy-token',
  templateUrl: './buy-token.component.html',
  styleUrls: ['./buy-token.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BuyTokenComponent {
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
    pagination: true,
    initialSlide: 1,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
  }

  constructor() {}

  onSwiper(swiper: any) {
    console.log(swiper)
  }
}
