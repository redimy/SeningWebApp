import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"],
})
export class ServicesComponent implements OnInit {
  title =
    "Servicios de Páginas Web, Apps Móviles y Software Personalizado - Sening Studio";

  constructor(private titleService: Title, private metaTagService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "description",
      content:
        "Consultoria digital que ofrece servicios profesionales en diseño y desarrollo de páginas web, Ecommerce, aplicaciones Móviles, apps Android y IOS, estrategia digital , marketing digital,posicionamiento SEO, software a Medida, gestores de contenido CMS y LMS.",
    });
  }
}
