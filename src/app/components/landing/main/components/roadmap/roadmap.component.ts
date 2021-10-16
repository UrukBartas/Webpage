import { Slide } from './../../../../../models/slide.model'
import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import SwiperCore, { SwiperOptions } from 'swiper'
import { environment } from '../../../../../../environments/environment'
@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RoadmapComponent implements OnInit {
  public config: SwiperOptions = {
    slidesPerView: 5,
    direction: 'vertical',
    navigation: true,
    pagination: { clickable: true, bulletClass: 'd-none' },
    scrollbar: { draggable: true, hide: true },
  }
  public slides: Array<Slide> = [
    {
      date: 'Q4-2021',
      isCompleted: false,
      isActive: true,
      image: 'ActionLoot_12',
      list: [
        'Foundation of the team',
        'Blueprint of the idea & project',
        'MVP of game & website',
        'All documentation release',
        'In-Game marketplace',
        'NFT sale',
        'Public presale',
      ],
    },
    {
      date: 'Q1-2022',
      isCompleted: false,
      isActive: false,
      image: 'ActionLoot_32',
      list: ['Work on improving the product', 'Contacting to designers & influencers', 'More in-game features', "Bigger CEX's listings"],
    },
    {
      date: 'Q2-2022',
      isCompleted: false,
      isActive: false,
      image: 'ActionLoot_106',
      list: ['Add more ingame items', 'Add mounts to travel faster on quests', 'Add dungeons'],
    },
    {
      date: 'Q3-2022',
      isCompleted: false,
      isActive: false,
      image: 'ActionLoot_03',
      list: ['Get doxxed', 'Add NPC vendors', 'Game stability & overall improving of UX/UI'],
    },
    {
      date: 'Q4-2022',
      isCompleted: false,
      isActive: false,
      image: 'ActionLoot_96',
      list: ['Start developing Uruk Bartas MMORPG with its own universe.'],
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
