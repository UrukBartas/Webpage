import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  keyframes,
  state,
} from '@angular/animations';
import { SwiperOptions } from 'swiper';
import { timer } from 'rxjs';
import { NftCardModel } from '../nft-card/nft-card.component';

@Component({
  selector: 'app-loot-boxes',
  templateUrl: './loot-boxes.component.html',
  styleUrls: ['./loot-boxes.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fade', [
      state(
        'fadeIn',
        style({
          opacity: 1,
          height: '100%',
          width: '100%',
          transform: 'scale(2)',
        })
      ),
      state(
        'fadeOut',
        style({
          opacity: 0,
          height: '0%',
          width: '0%',
        })
      ),
      transition('fadeOut => fadeIn', [
        animate(
          3000,
          keyframes([
            style({
              opacity: 0,
              height: '0%',
              width: '0%',
            }),
            style({
              opacity: 0.25,
              height: '25%',
              width: '25%',
            }),
            style({
              opacity: 0.5,
              height: '50%',
              width: '50%',
              transform: 'scale(1)',
            }),
            style({
              opacity: 0.75,
              height: '75%',
              width: '75%',
              transform: 'scale(1.5)',
            }),
            style({
              opacity: 1,
              height: '100%',
              width: '100%',
              transform: 'scale(2)',
            }),
          ])
        ),
      ]),
      transition('fadeIn => fadeOut', [
        animate(
          3000,
          keyframes([
            style({
              opacity: 1,
              height: '100%',
              width: '100%',
              transform: 'scale(2)',
            }),
            style({
              opacity: 0.75,
              height: '75%',
              width: '75%',
              transform: 'scale(1.5)',
            }),
            style({
              opacity: 0.5,
              height: '50%',
              width: '50%',
              transform: 'scale(1)',
            }),
            style({
              opacity: 0.25,
              height: '25%',
              width: '25%',
            }),
            style({
              opacity: 0,
              height: '0%',
              width: '0%',
            }),
          ])
        ),
      ]),
    ]),
  ],
})
export class LootBoxesComponent implements OnInit {
  public startedAnimation: boolean = false;
  public boxHaveOpened = false;
  public displayRewards = false;
  public claimedRewards = false;

  get isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  public config: SwiperOptions = {
    effect: 'cards',
    slidesPerView: this.isMobile ? 'auto' : 3,
    grabCursor: true,
    spaceBetween: 50,
    centeredSlides: true,
    navigation: true,
    pagination: false,
    initialSlide: 0,
  };

  public nftsObtained: Array<NftCardModel> = [
    {
      id: 0,
      imageName: 'ActionLoot_06.png',
      subTitle: 'Two-handed axe',
      title: 'Bonecrusher',
      rarity: 'rare',
      stats: ['STR', 'STA', 'PEN'],
    },
    {
      id: 1,
      subTitle: 'Two-handed sword',
      title: 'Royal claymore from the Empire',
      imageName: 'ActionLoot_11.png',
      rarity: 'epic',
      stats: ['STR', 'STA', 'RAN'],
    },
    {
      id: 2,
      subTitle: 'Cloth armor',
      title: 'Crimson mage cloth',
      imageName: 'ActionLoot_49.png',
      rarity: 'common',
      stats: ['INT', 'STA'],
    },
    {
      id: 3,
      subTitle: 'One-hand dage',
      title: 'Farmer knife',
      imageName: 'ActionLoot_01.png',
      rarity: 'common',
      stats: ['AGI', 'STA', 'SPD'],
    },
    {
      id: 4,
      subTitle: 'Boots',
      title: 'Flame empowered boots',
      imageName: 'ActionLoot_95.png',
      rarity: 'common',
      stats: ['INT', 'STA', 'SPD'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  public fadeDone(event) {
    if (event.fromState == 'fadeOut' && event.toState == 'fadeIn') {
      this.boxHaveOpened = true;
      this.startedAnimation = false;
      let audio = new Audio();
      audio.src = '../../../assets/sounds/chest-opening.mp3';
      audio.load();
      audio.play();
      timer(1000).subscribe((data) => {
        this.displayRewards = true;
      });
    }
  }

  public claimRewards(): void {
    this.displayRewards = false;
    this.claimedRewards = true;
  }
}
