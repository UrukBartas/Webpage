import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-whitepaper',
  templateUrl: './whitepaper.component.html',
  styleUrls: ['./whitepaper.component.scss'],
})
export class WhitepaperComponent {
  constructor(private utils: UtilsService) {}

  ngOnInit(): void {}

  public downloadWhitepaper(): void {
    this.utils.downloadWhitepaper();
  }
}
