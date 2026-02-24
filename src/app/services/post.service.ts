import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post, Comment, User } from '../models/post.model';

const BASE = 'https://jsonplaceholder.typicode.com';

@Injectable({ providedIn: 'root' })
export class PostService {
  private http = inject(HttpClient);

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${BASE}/posts`);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${BASE}/posts/${id}`);
  }

  getComments(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${BASE}/posts/${postId}/comments`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${BASE}/users/${id}`);
  }
}
