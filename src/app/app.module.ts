import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersListComponent } from './components/Users/users-list/users-list.component';
import { UserProfileComponent } from './components/Users/user-profile/user-profile.component';
import { PostListComponent } from './components/Posts/post-list/post-list.component';
import { PostDetailsComponent } from './components/Posts/post-details/post-details.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserProfileComponent,
    PostListComponent,
    PostDetailsComponent,
    HomeComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
