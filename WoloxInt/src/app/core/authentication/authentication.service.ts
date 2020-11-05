import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequestModel } from './models/loginRequest.model';
import { RegisterRequestModel } from './models/registerRequest.model';
import { UserModel } from './models/user.model';
import { TokenModel } from './models/token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private http: HttpClient) {
  }

  getToken() {
    return localStorage.getItem('AppToken');
  }
  setToken(data: TokenModel): void {
    localStorage.setItem('AppToken', data.token);
  }
  getStorageUser() {
    return localStorage.getItem('use_name');
  }
  setStorageUser(user: UserModel) {
    localStorage.setItem('user_name', user.name);
    localStorage.setItem('user_last_name', user.last_name);
    localStorage.setItem('country', user.country);
    localStorage.setItem('province', user.province);
    localStorage.setItem('mail', user.mail);
  }

  clearLocalStorage() {
    localStorage.clear()
  }

  login(loginForm: LoginRequestModel): Promise<Object> {
    return this.http.post('http://private-8e8921-woloxfrontendinverview.apiary-mock.com/login', { loginForm }).toPromise();
  }
  register(registerForm: RegisterRequestModel): Promise<Object> {
    return this.http.post('http://private-8e8921-woloxfrontendinverview.apiary-mock.com/signup', { registerForm }).toPromise();
  }

  isAuthenticated(): boolean {
    return this.getToken() != undefined
  }
}
