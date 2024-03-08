import { Component, OnInit } from '@angular/core';
import { Utils } from '../utils/utils';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  ngOnInit(): void {
  }

  public downloadWhitepaper():void{
    Utils.downloadWhitepaper()
  }

}
