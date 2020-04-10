import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  title = "Aplicaciones Web, Móviles y Software, Consultoria - Sening Studio";

  constructor(private titleService: Title, private metaTagService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "description",
      content:
        "Consultoria de Desarrollo y Diseño personalizado de Software, PWAs, Aplicaciones Móviles y Páginas Web por todo México.",
    });
  }
}
