import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './components/nav/nav';

// This is the root component — the entry point of the entire app.
// Angular starts here and builds the page outward from this component.
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, // enables <router-outlet> in the template
    Nav,          // enables <app-nav> in the template
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
