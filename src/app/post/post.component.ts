import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {PostService} from "../post.service";
import {Post} from "../post";
import {NgIf} from "@angular/common";
import {Router, RouterLink, RouterModule} from "@angular/router";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

    postForm : FormGroup;
    constructor(private formBuilder : FormBuilder, private postService:PostService, private router : Router) {
      this.postForm = this.formBuilder.group({
        title : [''],
        content : [''],
        description : ['']
      });
    }

    onSubmit(){
      if(this.postForm.valid){
        const newPost : Post = this.postForm.value;
        this.postService.savePost(newPost).subscribe(
          resp =>{
            this.postForm.reset();
            this.router.navigate(['/']);
          }
        );
      }else{
        console.log("Invalid form")
      }
    }
}
