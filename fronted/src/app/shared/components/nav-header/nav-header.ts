import { Component } from '@angular/core';
import { ThemeController } from '../theme-controller/theme-controller';
import { RouterLink } from '@angular/router';

@Component({
  imports: [ThemeController, RouterLink],
  selector: 'app-nav-header',
  styleUrl: './nav-header.css',
  templateUrl: './nav-header.html',
})
export class NavHeader {}
