import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from '../../services/post.service';
import { Tag } from '../models/post';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent implements OnInit {
  public tags: Observable<Tag[]> | undefined;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.tags = this.postService.getTags();

  }
}
