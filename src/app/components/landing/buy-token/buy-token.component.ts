import { Component, OnInit, ViewChild } from '@angular/core'
import { SwiperOptions } from 'swiper'
import SwiperCore, { EffectFade, Swiper } from 'swiper'

// install Swiper modules
SwiperCore.use([EffectFade])

@Component({
  selector: 'app-buy-token',
  templateUrl: './buy-token.component.html',
  styleUrls: ['./buy-token.component.scss'],
})
export class BuyTokenComponent {
  public config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  }

  @ViewChild('swiper', { static: false }) swiper: any
  constructor() {}

  public onSwiper(swiper: any) {
    console.log(swiper)
  }

  public onSlideChange() {
    console.log('slide change')
  }
}
