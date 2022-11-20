import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/interfaces/IPost';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-tag-posts',
  templateUrl: './tag-posts.component.html',
  styleUrls: ['./tag-posts.component.css'],
})
export class TagPostsComponent implements OnInit {
  tagPosts: IPost[] = [];
  constructor(
    private postService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let tagName = params.get('tagName')!;
      this.tagPosts = this.postService.getPostsByTag(tagName);
    });
  }
}
