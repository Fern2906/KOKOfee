import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginCard } from './shared/components/login-card/login-card';

@Component({
  imports: [RouterOutlet, LoginCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('fronted');
}
