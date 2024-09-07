import {Component, OnInit} from '@angular/core';
import {PostService} from "../post.service";
import {AsyncPipe, KeyValuePipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    KeyValuePipe,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  public posts: any;

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

}
