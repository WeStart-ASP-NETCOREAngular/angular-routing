import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  tags: string[] = [];
  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.tags = this.postService.tags;
  }
}
