import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Utils } from '../../../utils/utils';

@Component({
  selector: 'app-whitepaper',
  templateUrl: './whitepaper.component.html',
  styleUrls: ['./whitepaper.component.scss'],
})
export class WhitepaperComponent {
  constructor(private toast: ToastrService) {}

  ngOnInit(): void {}

  public downloadWhitepaper(): void {
    Utils.downloadWhitepaper();
  }

  public notAvailableYet(): void {
    this.toast.info(
      'I know you want it, but it is coming soon™ 😅',
      undefined,
      { positionClass: 'toast-top-right', progressBar: true }
    );
  }
}
