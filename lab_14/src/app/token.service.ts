import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token)
  {
    localStorage.setItem('id_token', token);
    console.log('saved');
  }

  getToken()
  {
    localStorage.getItem('id_token');
  }

}
