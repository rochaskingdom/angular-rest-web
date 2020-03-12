import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConstants} from "../app-constants";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) {
  }

  login(usuario) {

    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data => {

      // Retorno HTTP
      var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];

      localStorage.setItem("token", token);

        // console.info("Token: " + localStorage.getItem("token"));
    },
      error => {
      alert("Acesso Negado!");
      }
      );
  }

}
