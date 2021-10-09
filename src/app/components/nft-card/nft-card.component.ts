import { Component, Input, OnInit } from '@angular/core';

export interface NftCardModel {
  id: number;
  imageName: string;
  subTitle: string;
  title: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary' | 'mythic';
  stats: Array<string>;
}

@Component({
  selector: 'app-nft-card',
  templateUrl: './nft-card.component.html',
  styleUrls: ['./nft-card.component.scss'],
})
export class NftCardComponent implements OnInit {
  @Input() inputItem: NftCardModel;
  constructor() {}

  ngOnInit(): void {}

  public getChipStatColor(statName: string): string {
    switch (statName) {
      case 'STR':
        return '#001f3f';
      case 'STA':
        return 'FF4136';
      case 'PEN':
        return 'FFDC00';
      case 'RAN':
        return '#B10DC9';
      case 'INT':
        return '#0074D9';
      case 'AGI':
        return '01FF70';
      case 'SPD':
        return '#85144b';

      default:
        return 'FF4136';
    }
  }

  public lightenDarkenColor(col, amt) {

    amt=256-Math.floor(amt*5.12)
    const  usePound = col[0]=="#";
    if (usePound)
        col = col.slice(1);

    const num = parseInt(col,16);

    const rr=(num >> 16) + amt;
    const  bb = ((num >> 8) & 0x00FF) + amt;
    const  gg = (num & 0x0000FF) + amt;

    const r=rr>255?255:rr<0?0:rr;
    const b=bb>255?255:bb<0?0:bb;
    const g=gg>255?255:gg<0?0:gg;

    if ((g | (b << 8) | (r << 16))==0)
        return "#000000";

    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);

  }
}
