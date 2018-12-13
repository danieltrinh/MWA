import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-users',
  template: `
    <ul>
      <li *ngFor="let u of users">
        <a [routerLink]="[u.login.uuid]">{{u.name.first}} {{u.name.last}}</a>
      </li>
    </ul>
  `,
  styles: [],
  providers: [DataService]
})
export class UsersComponent {

  private users;

  constructor(public dataService: DataService) {
  }

  makeRequest() {
    this.dataService.getData(10).subscribe(
      (users) => {
        this.users = users.results;
      },
      (error) => console.log(error),
      () => console.log('completed')
    );
  }

  ngOnInit() {
    this.makeRequest();
  }
}
