import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss'],
})
export class CoverComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  public go() {
    this.router.navigateByUrl('/game')
  }
}
