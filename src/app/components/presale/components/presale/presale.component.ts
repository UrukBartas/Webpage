import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import SwiperCore, { EffectCoverflow, Navigation, SwiperOptions } from 'swiper';
import { Rarity } from '../../../../enums/rarity.enum';
import {
  getRarityColor,
  getRarityFogColor,
} from '../../../../utils/rarity-color.const';
import { ThreeService } from '../../services/threejs.service';
import { lootboxItemDropRateByRarity, lootboxes } from './data/lootbox.const';

SwiperCore.use([Navigation, EffectCoverflow]);

@Component({
  selector: 'app-presale',
  templateUrl: './presale.component.html',
  styleUrls: ['./presale.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PresaleComponent implements AfterViewInit {
  @ViewChild('threeContainer', { static: true })
  threeContainer!: ElementRef<HTMLDivElement>;
  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 100,
      stretch: 1,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  };
  itemsByRarity;
  openDetail = false;
  lootboxes = lootboxes;
  activeLootbox = lootboxes[0];
  rarityEnum = Rarity;
  private threeService = inject(ThreeService);
  private cdr = inject(ChangeDetectorRef);
  getRarityColor = getRarityColor;
  lootboxItemDropRateByRarity = lootboxItemDropRateByRarity;

  ngAfterViewInit(): void {
    this.threeService.initialize(this.threeContainer);
  }

  onSlideChange(swiper: any) {
    this.activeLootbox = lootboxes[swiper.activeIndex];
    this.threeService.changeFogColor(
      getRarityFogColor(this.activeLootbox.rarity)
    );
    this.cdr.detectChanges();
  }

  getImageUrls(): string[] {
    const basePath = 'assets/presale/lootbox-items/';
    const rarity = this.activeLootbox.rarity;
    return Array.from(
      { length: 5 },
      (_, index) => `${basePath}${rarity.toLowerCase()}/${index + 1}.webp`
    );
  }
}
