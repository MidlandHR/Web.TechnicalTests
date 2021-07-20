import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post, Tag } from '../components/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiURL = '/api/p/';
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<any>(this.apiURL + 'posts').pipe(map(res => res.posts));
  }
  
  getTags(): Observable<Tag[]> {
    return this.http.get<any>(this.apiURL + 'tags').pipe(map(res => res.tags));
  }

}
