import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {Post} from "./post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private getPostUrl = "http://localhost:8080/api/posts";

  private savePostUrl = "http://localhost:8080/api/posts"

  constructor(private http:HttpClient) { }

  public getPosts(){
    return this.http.get<any>(this.getPostUrl)
      .pipe(
        map(response => response.content || []), // Extract the content array
        catchError(error => {
          console.error('Error fetching content', error);
          return of([]); // Return an empty array in case of error
        })
      );
  }

  public savePost(post:Post) : Observable<Post>{
    return this.http.post<Post>(this.savePostUrl,post);
  }
}
