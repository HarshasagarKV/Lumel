import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllsongsComponent } from './allsongs/allsongs.component';
import { PlaylistComponent } from './playlist/playlist.component';

const routes: Routes = [
  {
    path : '',
    component : DashboardComponent
  },
  {
    path : 'allsong',
    component : AllsongsComponent
  },
  {
    path : 'playList',
    component : PlaylistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
