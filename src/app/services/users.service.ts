import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserModel } from "../models/user.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  private url = "https://sening-studio.firebaseio.com";

  constructor(private http: HttpClient) {}

  createUser(user: UserModel) {
    return this.http.post(`${this.url}/users.json`, user).pipe(
      map((resp: any) => {
        user.id = resp.name;
        return user;
      })
    );
  }
}
