import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent implements OnInit {
  public show = false
  constructor() {}

  ngOnInit(): void {}
}
