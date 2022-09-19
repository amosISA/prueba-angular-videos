import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VideoListComponent} from './video-list/video-list.component';

const routes: Routes = [
    { path: '', redirectTo: '/videos', pathMatch: 'full' },
    { path: 'videos', component: VideoListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}