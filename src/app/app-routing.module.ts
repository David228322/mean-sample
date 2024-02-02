import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppModule} from "./app.module";

const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
