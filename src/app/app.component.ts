import {Component, NgModule} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {HttpClientModule} from "@angular/common/http";
import {MatCommonModule} from "@angular/material/core";
import {PostComponent} from "./post/post.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    HttpClientModule,
    RouterOutlet,
    HomeComponent,
    PostComponent,
    MatCommonModule,
    RouterLink,
    RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-web';
}
