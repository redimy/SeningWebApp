import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

// Http
import { HttpClientModule } from "@angular/common/http";

// Routes
import { APP_ROUTING } from "./app.routes";

import { AppRoutingModule } from "./app-routing.module";
// Components
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ContactTemplateComponent } from "./components/shared/contactTemplate/contact-template/contact-template.component";
import { CarouselComponent } from "./components/home/carousel/carousel.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ContactTemplateComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
