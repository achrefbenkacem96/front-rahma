import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-recent-comment',
  templateUrl: './blog-recent-comment.component.html'
})
export class BlogRecentCommentComponent implements OnInit {

  List: any[] = [
    { title: 'A Html Commenter Construction industry' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
