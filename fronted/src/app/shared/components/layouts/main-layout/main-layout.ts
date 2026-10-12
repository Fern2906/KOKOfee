import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavHeader } from '../../nav-header/nav-header';
import { Footer } from '../../footer/footer';

@Component({
  imports: [RouterOutlet, NavHeader, Footer],
  selector: 'app-main-layout',
  styleUrl: './main-layout.css',
  templateUrl: './main-layout.html',
})
export class MainLayout {}
