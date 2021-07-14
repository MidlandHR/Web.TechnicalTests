import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'posts-app',
  templateUrl: './posts-app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsAppComponent {
}
