import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/interfaces/IPost';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  post!: IPost;
  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.post = this.postService.getPost(1);
  }

  onNavigateToUser(id: number) {}
}
