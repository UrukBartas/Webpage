import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-whitepaper',
  templateUrl: './whitepaper.component.html',
  styleUrls: ['./whitepaper.component.scss'],
})
export class WhitepaperComponent {
  constructor() {}

  public download() {
    console.log('download')
  }
}
