import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleCasePipe, SlicePipe } from '@angular/common';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-home',
  imports: [RouterLink, TitleCasePipe, SlicePipe],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  private svc = inject(PostService);
  posts = signal<Post[]>([]);
  loading = signal(true);
  search = signal('');

  ngOnInit() {
    this.svc.getPosts().subscribe(posts => {
      this.posts.set(posts.slice(0, 20));
      this.loading.set(false);
    });
  }

  filtered() {
    const q = this.search().toLowerCase();
    return this.posts().filter(p =>
      p.title.toLowerCase().includes(q) || p.body.toLowerCase().includes(q)
    );
  }

  onSearch(e: Event) {
    this.search.set((e.target as HTMLInputElement).value);
  }
}
