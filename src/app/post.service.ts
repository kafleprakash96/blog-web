import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postApiUrl = "http://localhost:8080/api/posts"

  constructor(private http:HttpClient) { }

  public getPosts(){
    return this.http.get<any>(this.postApiUrl)
      .pipe(
        map(response => response.content || []), // Extract the content array
        catchError(error => {
          console.error('Error fetching content', error);
          return of([]); // Return an empty array in case of error
        })
      );
  }
}
