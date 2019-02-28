import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated(): boolean {
    const flag = JSON.parse(localStorage.getItem("auth"));
    return flag;
  }

}
