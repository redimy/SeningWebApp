import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { ContactComponent } from "./components/contact/contact.component";
import { AboutComponent } from "./components/about/about.component";

const ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
