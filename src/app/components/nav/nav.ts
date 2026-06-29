import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// @Component is a "decorator" — it's metadata that tells Angular
// what this class is and how to use it.
// - selector: the HTML tag you use to place this component (<app-nav>)
// - imports: other Angular pieces this component needs to work
// - templateUrl: the HTML file for this component's UI
@Component({
  selector: 'app-nav',
  imports: [RouterLink], // RouterLink makes routerLink work in the template
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {}
