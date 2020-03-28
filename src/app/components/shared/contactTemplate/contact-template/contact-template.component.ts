import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UserModel } from "src/app/models/user.model";
import { UsersService } from "src/app/services/users.service";

import Swal from "sweetalert2";
import { Observable } from "rxjs";

@Component({
  selector: "app-contact-template",
  templateUrl: "./contact-template.component.html",
  styleUrls: ["./contact-template.component.css"]
})
export class ContactTemplateComponent implements OnInit {
  user: UserModel = new UserModel();
  test: Date = new Date();
  focus;
  focus1;
  constructor(private usersService: UsersService) {}

  ngOnInit() {}

  saveContact(formContact: NgForm) {
    if (formContact.invalid) {
      Object.values(formContact.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }

    Swal.fire({
      title: "Espere",
      text: "Guardando Información",
      icon: "info",
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    peticion = this.usersService.createUser(this.user);

    peticion.subscribe(resp => {
      Swal.fire({
        title: this.user.name,
        text: "Se guardo correctamente",
        icon: "success"
      });
    });
  }
}
