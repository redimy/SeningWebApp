import { Component, OnInit } from "@angular/core";
import { PLATFORM_ID, APP_ID, Inject } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { Meta } from "@angular/platform-browser";

import { NgxSpinnerService } from "ngx-spinner";
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loading = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string,
    private spinnerService: NgxSpinnerService,
    private router: Router,
    private metaTagService: Meta
  ) {
    /*    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.spinnerService.show();

          this.loading = true;
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.spinnerService.hide();
          this.loading = false;

          break;
        }
        default: {
          break;
        }
      }
    }); */
  }

  ngOnInit() {
    this.metaTagService.addTags([
      {
        name: "keywords",
        content:
          "Desarrollo web, Aplicaciones Móviles, Diseño Web, Paginas Web, Software a Medida, Administrador de Contenidos CMS",
      },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Sening Studio" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { charset: "UTF-8" },
    ]);
    // this.spinner();
  }

  spinner(): void {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 2000);
  }

  onActivate(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
          // window.scrollTo(0, pos - 300); // how far to scroll on each step
          window.scrollTo(0, 0); // how far to scroll on each step
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 16);
    }
  }
}
