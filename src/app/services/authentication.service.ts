import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private path = environment.apiUrl+"/api"

  constructor(private httpClient: HttpClient) { }
  register(user: any ){
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.post(this.path + "/auth/signup", user )
  }
  login(user: any ){
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.post(this.path + "/auth/signin", user )
  }
  LoginWithFacebook(credentials: string ){
    console.log("🚀 ~ AuthenticationService ~ LoginWithFacebook ~ credentials:", JSON.stringify(credentials))
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.post(this.path + "/auth/login/facebook", credentials )
  }
  verify(code: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.set('code', code);
     return this.httpClient.post(`${this.path}/auth/verify`,  body, { headers });
  }
}
