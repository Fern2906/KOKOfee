import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-feature-card',
  styleUrl: './feature-card.css',
  templateUrl: './feature-card.html',
})
export class FeatureCard {
  @Input() image: string = ''
  @Input() description: string =''
}
