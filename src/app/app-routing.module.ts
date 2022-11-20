import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AboutComponent } from './components/about/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { PostDetailsComponent } from './components/Posts/post-details/post-details.component';
import { PostListComponent } from './components/Posts/post-list/post-list.component';
import { TagPostsComponent } from './components/Tags/tag-posts/tag-posts.component';
import { TagsComponent } from './components/Tags/tags/tags.component';
import { UserProfileComponent } from './components/Users/user-profile/user-profile.component';
import { UsersListComponent } from './components/Users/users-list/users-list.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'users/:userId', component: UserProfileComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'posts/:postId', component: PostDetailsComponent },
  {
    path: 'tags',
    component: TagsComponent,
    canActivateChild: [AuthGuard],
    children: [{ path: ':tagName', component: TagPostsComponent }],
  },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
