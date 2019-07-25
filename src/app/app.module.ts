import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses.component";
import { CourseComponent } from "./course/course.component";
import { CoursesService } from "./services/courses.service";
import { AuthorsComponent } from "./authors/authors.component";
import { AuthorsServiceService } from "./services/authors-service.service";
import { FavoriteComponent } from "./favorite/favorite.component";
import { TitleCasePipe } from "./title-case.pipe";
import { PanelComponent } from "./panel/panel.component";
import { HeartComponent } from "./heart/heart.component";
import { PhoneNumberUSComponent } from "./phone-number-us/phone-number-us.component";
import { UsPhoneInputDirective } from "./us-phone-input.directive";
import { ZippyComponent } from "./zippy/zippy.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { PostsComponent } from "./posts/posts.component";
import { PostService } from "./services/post.service";
import { FollowersComponent } from "./followers/followers.component";
import { FollowersService } from "./services/followers.service";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { GithubProfileComponent } from "./github-profile/github-profile.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { SearchbarComponent } from './searchbar/searchbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    FavoriteComponent,
    TitleCasePipe,
    PanelComponent,
    HeartComponent,
    PhoneNumberUSComponent,
    UsPhoneInputDirective,
    ZippyComponent,
    ContactFormComponent,
    PostsComponent,
    FollowersComponent,
    HomeComponent,
    NavbarComponent,
    GithubProfileComponent,
    NotFoundComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "followers", component: FollowersComponent },
      { path: "profile/:id/:username", component: GithubProfileComponent },
      { path: "posts", component: PostsComponent },
      { path: "*", component: NotFoundComponent }
    ])
  ],
  providers: [
    CoursesService,
    AuthorsServiceService,
    FollowersService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
