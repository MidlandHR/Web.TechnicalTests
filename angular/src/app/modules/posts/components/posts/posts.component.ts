import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from '../../services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public posts: Observable<Post[]> | undefined;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }
}
