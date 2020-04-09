import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  test: Date = new Date();
  focus;
  focus1;

  constructor() {}

  ngOnInit() {}
}
