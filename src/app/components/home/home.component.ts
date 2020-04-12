import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  title =
    "Desarrollo Web, Aplicaciones Móviles, Diseño de Paginas Web, Software en Monterrey, México";

  constructor(private titleService: Title, private metaTagService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "description",
      content:
        "Desarrollo de Páginas Web, Marketing Digital, Diseño de Páginas Web, Aplicaciones Móviles, Apps Android y IOS, Posicionamiento SEO, Software empresarial, Software a Medida en Monterrey, México",
    });
  }
}
