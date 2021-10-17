import { GameComponent } from './components/game/game.component';
import { LandingComponent } from './components/landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuard } from './guards/route.guard';
import { LootBoxesComponent } from './components/loot-boxes/loot-boxes.component';
import { PresaleComponent } from './components/landing/presale/presale.component';
import { MainComponent } from './components/landing/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children:[
      {
        path:'',
        component:MainComponent
      },
      {
        path: 'presale',
        component: PresaleComponent,
      }
    ]
  },
  {
    path: 'loot-boxes',
    component: LootBoxesComponent,
    canActivate: [RouteGuard],
  },
  {
    path: 'game',
    component: GameComponent,
    canActivate: [RouteGuard],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
