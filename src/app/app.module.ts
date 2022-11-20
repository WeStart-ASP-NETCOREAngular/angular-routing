import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersListComponent } from './components/Users/users-list/users-list.component';
import { UserProfileComponent } from './components/Users/user-profile/user-profile.component';
import { PostListComponent } from './components/Posts/post-list/post-list.component';
import { PostDetailsComponent } from './components/Posts/post-details/post-details.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { TagsComponent } from './components/Tags/tags/tags.component';
import { TagPostsComponent } from './components/Tags/tag-posts/tag-posts.component';
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'users/:userId', component: UserProfileComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'posts/:postId', component: PostDetailsComponent },
  {
    path: 'tags',
    component: TagsComponent,
    children: [{ path: ':tagName', component: TagPostsComponent }],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserProfileComponent,
    PostListComponent,
    PostDetailsComponent,
    HomeComponent,
    TagsComponent,
    TagPostsComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
