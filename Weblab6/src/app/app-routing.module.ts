import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AlbumsComponent} from "./albums/albums.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AlbumDetailsComponent} from "./album-details/album-details.component";
import {AlbumPhotosComponent} from "./album-photos/album-photos.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'albums/:id', component: AlbumDetailsComponent},
  {path: 'albums/:id/photos', component: AlbumPhotosComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
