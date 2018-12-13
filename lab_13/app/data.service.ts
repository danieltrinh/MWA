import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(public http: HttpClient) {
  }

  getData(lim) {
    //this will return Observable
    return this.http.get('https://randomuser.me/api/?results=' + lim);
  }
}
