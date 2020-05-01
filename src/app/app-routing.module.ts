import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovelsComponent } from './novels/novels.component';

const routes: Routes = [
  { path: '', component: NovelsComponent },

  {
    path: 'novels',
    component: NovelsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
