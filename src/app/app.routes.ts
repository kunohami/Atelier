import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Work } from './pages/work/work';
import { Merch } from './pages/merch/merch';
import { Commissions } from './pages/commissions/commissions';
import { Contact } from './pages/contact/contact';

// Each object here maps a URL path to a component.
// When the user visits that URL, Angular renders the matching component
// inside the <router-outlet> in app.html.
export const routes: Routes = [
  { path: '', component: Landing },           // /         → landing page
  { path: 'work', component: Work },          // /work     → gallery
  { path: 'merch', component: Merch },        // /merch    → merchandise
  { path: 'commissions', component: Commissions }, // /commissions → prices
  { path: 'contact', component: Contact },    // /contact  → contact
  { path: '**', redirectTo: '' },             // anything else → back to landing
];
