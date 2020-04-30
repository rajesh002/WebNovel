import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovelsComponent } from './novels/novels.component';
import { RealisticComponent } from './realistic/realistic.component';
import { HistoricalComponent } from './historical/historical.component';
import { ActionComponent } from './action/action.component';
import { PopularComponent } from './popular/popular.component';
import { RatingComponent } from './rating/rating.component';

const routes: Routes = [
  { path: '', component: NovelsComponent },
  {
    path: 'realistic',
    component: RealisticComponent,
  },
  {
    path: 'historical',
    component: HistoricalComponent,
  },
  {
    path: 'action',
    component: ActionComponent,
  },
  {
    path: 'popular',
    component: PopularComponent,
  },
  {
    path: 'rating',
    component: RatingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
