import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {

  private data = JSON.parse(localStorage.getItem('data'));

  constructor(public http: HttpClient) {
  }

  getNewData(lim) {
    //this will return Observable
    return this.http.get('https://randomuser.me/api/?results=' + lim);
  }

  replaceData(inputs) {
    this.data = inputs;
    localStorage.setItem('data', JSON.stringify(this.data));
  }

  getFullData() {
    return this.data;
  }

  getUserById(id) {
    console.log(this.data);
    for (const user of this.data) {
      if (user.login.uuid === id)
        return user;
    }
  }

  validateUser(id) {
    for (const user of this.data) {
      if (user.login.uuid === id)
        return true;
    }
    return false;
  }


}
