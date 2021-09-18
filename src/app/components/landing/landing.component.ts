import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import * as Aos from 'aos'
import * as $ from 'jquery'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  private previousPosition: number = 0
  private showing = false

  constructor(public router: Router) {}

  ngOnInit(): void {
    Aos.init({
      offset: 200,
      delay: 100,
    })
  }
}
