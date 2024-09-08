import {Component, NgModule} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {HttpClientModule} from "@angular/common/http";
import {MatCommonModule} from "@angular/material/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterOutlet,HomeComponent,MatCommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-web';
}
