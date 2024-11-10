import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { PresaleRedirectComponent } from './main/components/presale-redirect/presale-redirect.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: '',
        component: MainComponent,
      },
      {
        path: 'presale',
        component: PresaleRedirectComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
