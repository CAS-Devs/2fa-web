import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/login.model';

const URL = 'http://localhost:8080/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  public post(login: Login): Observable<String> {
    return this.http.post<String>(URL, login);
  }

}
