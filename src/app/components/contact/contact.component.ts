import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  test: Date = new Date();
  focus;
  focus1;

  title =
    "Diseñamos y Desarrollamos su Página Web, App Móvil y Software  - Sening Studio";

  constructor(private titleService: Title, private metaTagService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "description",
      content:
        "Nos encantaria ayudarte en el diseño y programación de tu software, página web , aplicacion móvil o cualquiera que sea la meta de tu negocio.",
    });
  }
}
