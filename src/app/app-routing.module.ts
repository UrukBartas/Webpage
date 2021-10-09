import { GameComponent } from './components/game/game.component';
import { LandingComponent } from './components/landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuard } from './guards/route.guard';
import { LootBoxesComponent } from './components/loot-boxes/loot-boxes.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'loot-boxes',
    component: LootBoxesComponent,
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
