import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { EffectCoverflow, Navigation, Pagination, SwiperOptions } from 'swiper';
import SwiperCore from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);
@Component({
  selector: 'app-buy-token',
  templateUrl: './buy-token.component.html',
  styleUrls: ['./buy-token.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BuyTokenComponent {
  public config: SwiperOptions = {
    effect: 'coverflow',
    slidesPerView: 'auto',
    grabCursor: true,
    spaceBetween: 50,
    centeredSlides: true,
    navigation: true,
    pagination: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
  };

  @ViewChild('swiper', { static: false }) swiper: any;
  constructor() {}

  onSwiper(swiper: any) {
    console.log(swiper);
  }

  slideNext() {
    console.log('avant');

    this.swiper.swiperRef.slideNext(100);
  }
  slidePrev() {
    console.log('arrere');
    this.swiper.swiperRef.slidePrev(100);
  }
}
