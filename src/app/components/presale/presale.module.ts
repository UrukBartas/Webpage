import { NgModule } from '@angular/core';
import { PresaleRoutingModule } from './presale-routing.module';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { ThreeService } from './services/threejs.service';
import { PresaleComponent } from './components/presale/presale.component';

@NgModule({
  declarations: [PresaleComponent],
  imports: [CommonModule, PresaleRoutingModule, SwiperModule],
  providers: [ThreeService],
})
export class PresaleModule {}
