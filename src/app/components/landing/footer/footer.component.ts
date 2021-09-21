import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private utils:UtilsService) { }

  ngOnInit(): void {
  }

  public downloadWhitepaper():void{
    this.utils.downloadWhitepaper()
  }

}
