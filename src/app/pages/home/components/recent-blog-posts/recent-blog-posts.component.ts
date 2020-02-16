import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogPost } from 'src/app/interfaces/interfaces';
import { BlogService } from 'src/app/services/blog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recent-blog-posts',
  templateUrl: './recent-blog-posts.component.html',
  styleUrls: ['./recent-blog-posts.component.scss']
})
export class RecentBlogPostsComponent implements OnInit, OnDestroy {

  blog_posts: BlogPost[];
  pSub: Subscription;

  constructor(
    private blogService: BlogService,
  ) { }

  ngOnInit(): void {
    this.getBlogPosts();
  }

  getBlogPosts() {
    window.scroll(0,0);
    this.pSub = this.blogService
      .getBlogPosts(1, 0, '')
      .subscribe(posts => {
        posts["results"].forEach(post => {
          var plainText = post.content.replace(/<[^>]*>/g, '');
          post.plainText = plainText;
        });
        this.blog_posts = posts["results"];
      });
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
  }

}
