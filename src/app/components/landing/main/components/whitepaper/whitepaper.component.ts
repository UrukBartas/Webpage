import { ToastrService } from 'ngx-toastr';
import { UtilsService } from './../../../../../services/utils.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whitepaper',
  templateUrl: './whitepaper.component.html',
  styleUrls: ['./whitepaper.component.scss'],
})
export class WhitepaperComponent {
  constructor(private utils: UtilsService, private toast: ToastrService) {}

  ngOnInit(): void {}

  public downloadWhitepaper(): void {
    this.utils.downloadWhitepaper();
  }

  public notAvailableYet(): void {
    this.toast.info(
      'I know you want it, but it is coming soon™ 😅',
      undefined,
      { positionClass: 'toast-top-right', progressBar: true }
    );
  }
}
