import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovelsComponent } from './novels/novels.component';
import { RealisticComponent } from './realistic/realistic.component';
import { HistoricalComponent } from './historical/historical.component';
import { ActionComponent } from './action/action.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
