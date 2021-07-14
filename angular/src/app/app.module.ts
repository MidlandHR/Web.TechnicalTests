import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { PostsAppModule } from "./modules/posts/posts-app.module";
import { TrainTicketModule } from "./modules/train-ticket/train-ticket.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    TrainTicketModule,
    PostsAppModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}

