import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
}
