import {Component, OnInit} from '@angular/core';
import {PostService} from "../post.service";
import {AsyncPipe, KeyValuePipe, NgFor, NgForOf, NgIf} from "@angular/common";
import {MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {PostComponent} from "../post/post.component";
import {RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgFor,
    MatCardHeader,
    MatCard,
    MatCardActions,
    MatButton,
    MatCardTitle,
    MatCardSubtitle,
    NgIf,
    RouterLinkActive,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  public posts: any;

  public expandedPostId : number | null = null;

  constructor(private postService:PostService) {
  }

  ngOnInit():void{
    this.getPosts();
  }

  private getPosts(){
   this.postService.getPosts().subscribe(
     post => {
      this.posts = post;
     }
   );
  }

  togglePost(postId : number){
    this.expandedPostId = this.expandedPostId === postId ? null : postId;
  }

}
