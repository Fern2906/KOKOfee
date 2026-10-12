import { Component } from '@angular/core';
import { FeatureCard } from '../../shared/components/feature-card/feature-card';

@Component({
  imports: [FeatureCard],
  selector: 'app-home-page',
  styleUrl: './home-page.css',
  templateUrl: './home-page.html',
})
export class HomePage {}
