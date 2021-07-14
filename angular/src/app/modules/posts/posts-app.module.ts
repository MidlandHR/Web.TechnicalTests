import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from "@angular/router";
import { FiltersComponent } from './components/filters/filters.component';
import { INotification, NotificationsComponent } from "./components/notifications/notifications.component";
import { PostsComponent } from "./components/posts/posts.component";
import { FakeBackendInterceptor } from "./fake-backend-interceptor/fake-backend-interceptor.service";
import { PostsAppComponent } from "./posts-app.component";

const FILTERS_ROUTE: Route = {
    path: '',
    component: FiltersComponent,
    outlet: 'filters'
  },
  POSTS_ROUTE: Route = {
    path: '',
    component: PostsComponent
  },
  NOTIFICATIONS_ROUTE: Route = {
    path: '',
    component: NotificationsComponent,
    resolve: {
      notifications: 'notifications'
    }
  }

const routes: Routes = [{
  path: 'posts',
  component: PostsAppComponent,
  children: [FILTERS_ROUTE, POSTS_ROUTE]
}, {
  path: 'notifications',
  component: PostsAppComponent,
  children: [FILTERS_ROUTE, NOTIFICATIONS_ROUTE]
}];

function notificationsResolver(): Array<INotification> {
  return [{
    type: 'comment',
    text: 'Te sumo malorum elaboraret sit. Ea alienum dissentiunt cum. Vel at solet nullam, eu nec nobis mediocritatem.'
  }, {
    type: 'vote',
    text: 'Ei diam virtute albucius his. Eos aliquip aliquam an.'
  }, {
    type: 'vote',
    text: 'Mea homero inimicus te, nec ei verear omittam, homero adipiscing eu nam.'
  }, {
    type: 'comment',
    text: 'Nam nominavi oporteat no, cibo dolorem at sed.'
  }, {
    type: 'vote',
    text: 'Per ne quas noluisse accusata, nec nibh scripserit cu.'
  }, {
    type: 'comment',
    text: 'Ei mundi primis tacimates quo, decore ubique quaerendum vim ea, odio aliquip oblique an quo.'
  }, {
    type: 'vote',
    text: 'Eu per iusto nullam euismod, prodesset appellantur definitionem his eu.'
  }, {
    type: 'comment',
    text: 'Salutatus dissentiet ad eos, ad noster invidunt sed.'
  }]
}

@NgModule({
  declarations: [
    PostsAppComponent,
    PostsComponent,
    NotificationsComponent,
    FiltersComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
  }, {
    provide: 'notifications',
    useValue: notificationsResolver
  }],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    CommonModule
  ]
})
export class PostsAppModule {
}
