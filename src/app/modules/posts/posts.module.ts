import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PostsListComponent,
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class PostsModule { }
