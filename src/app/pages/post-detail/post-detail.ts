import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { PostService } from '../../services/post.service';
import { Post, Comment, User } from '../../models/post.model';

@Component({
  selector: 'app-post-detail',
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.scss'
})
export class PostDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private svc = inject(PostService);

  post = signal<Post | null>(null);
  comments = signal<Comment[]>([]);
  author = signal<User | null>(null);
  loading = signal(true);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.svc.getPost(id).subscribe(post => {
      this.post.set(post);
      this.loading.set(false);
      this.svc.getUser(post.userId).subscribe(u => this.author.set(u));
    });
    this.svc.getComments(id).subscribe(c => this.comments.set(c));
  }
}