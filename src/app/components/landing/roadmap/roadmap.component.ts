import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import SwiperCore, { SwiperOptions } from 'swiper'
import { environment } from '../../../../environments/environment'
import { BSbreakpoints } from '../../../const/bootstrap-breakpoints-px.const'
import { Slide } from '../../../models/slide.model'
@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RoadmapComponent implements OnInit {
  public config: SwiperOptions = {
    slidesPerView: 5,
    navigation: true,
    pagination: { clickable: true, bulletClass: 'd-none' },
    scrollbar: { draggable: true, hide: true },
    breakpoints: {
      [BSbreakpoints.XL]: {
        slidesPerView: 5,
      },
      [BSbreakpoints.LG]: {
        slidesPerView: 3,
      },

      [BSbreakpoints.SM]: {
        slidesPerView: 3,
      },
    },
  }
  public slides: Array<Slide> = [
    {
      date: 'Q4-2021',
      isCompleted: false,
      isActive: true,
      list: [
        'Foundation of the team',
        'Blueprint of the idea & project',
        'MVP of game & website',
        'All documentation release',
        'Public presale',
      ],
    },
    {
      date: 'Q1-2022',
      isCompleted: false,
      isActive: false,
      list: ['Work on improving the product', 'Contacting to designers & influencers', 'More in-game features', "Bigger CEX's listings"],
    },
    {
      date: 'Q2-2022',
      isCompleted: false,
      isActive: false,
      list: ['Add more ingame items', 'Add mounts to travel faster on quests', 'Add dungeons'],
    },
    {
      date: 'Q3-2022',
      isCompleted: false,
      isActive: false,
      list: ['Get doxxed', 'Add NPC vendors', 'Game stability & overall improving of UX/UI'],
    },
    {
      date: 'Q4-2022',
      isCompleted: false,
      isActive: false,
      list: ['Build Uruk Bartas MMORPG with its own universe.'],
    },
  ]
  public urlEnvRoadmap = ''
  constructor() {
    this.urlEnvRoadmap = environment.urlRoadmap
  }

  ngOnInit(): void {}

  onSwiper(swipe: any) {}
  onSlideChange() {}
}
