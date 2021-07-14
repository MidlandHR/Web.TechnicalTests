import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import comments from './_resources/comments.json';
import posts from './_resources/posts.json';
import tags from './_resources/tags.json';

type ResourceType = 'posts' | 'tags' | 'comments';

type PostsRegExpMatchArray = RegExpMatchArray & {
  groups: {
    type: ResourceType;
    postId?: string;
  };
};

type IResult = ITag | IComment | IPost;

interface ITag {
  id: string;
  name: string;
}

interface IComment {
  id: string;
  parentId: string;
  comment: string;
}

interface ICommentResource {
  comments: Array<IComment>,
  postId: string;
}

interface IPost {
  id: string;
  title: string;
  text: string;
  votes: {
    up: number;
    down: number;
  };
  tags: Array<ITag>;
}

interface IResources {
  posts: Array<IPost>;
  tags: Array<ITag>;
  comments: Array<ICommentResource>;
}

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  private _resources: IResources = {
    ...posts,
    ...comments,
    ...tags
  };

  private readonly _baseRegex: RegExp = /^[\/]?api\/p\//;
  private readonly _resourceRegex: RegExp = /(?:posts\/(?<postId>[^\/]+)\/)?(?<type>(?:tags)|(?:posts)|(?:comments))$/;

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!this._shouldHandle(request.url, request.method)) {
      return next.handle(request);
    }

    return this._handle(request, next);
  }

  private _shouldHandle(url: string, method: string): boolean {
    return method === 'GET' && this._baseRegex.test(url) && this._resourceRegex.test(url);
  }

  private _handle(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const match: PostsRegExpMatchArray | null = request.url.match(this._resourceRegex) as PostsRegExpMatchArray;
    if (match) {
      const body: Array<IResult> | undefined = this._getBody(match.groups.type, match.groups.postId);

      if (body) {
        return of(new HttpResponse({ status: 200, body: { [match.groups.type]: body } }))
          .pipe(delay(700))
      }
    }

    return next.handle(request);
  }

  private _getBody(type: ResourceType, postId?: string): Array<IResult> | undefined {
    switch (type) {
      case 'comments':
        return this._resources[type]
          .find((comments: ICommentResource) => postId === comments.postId)
          ?.comments;
      default:
        return this._resources[type];

    }
  }
}
