import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-users',
  template: `
    <p>Newly Fetched Users</p>
    <ul>
      <li *ngFor="let u of users">
        {{u.name.first}} {{u.name.last}}
      </li>
    </ul>
    <button (click)="onStore(users)">Replace</button>

    <div>
      <p>Saved users</p>
      <ul>
        <li *ngFor="let u of fullData">
          <a [routerLink]="[u.login.uuid]">{{u.name.first}} {{u.name.last}}</a>
        </li>
      </ul>
    </div>
  `,
  styles: [],
  providers: []
})
export class UsersComponent {

  public users;
  public fullData;

  constructor(public dataService: DataService) {
    this.fullData = this.dataService.getFullData();
  }

  makeRequest() {
    console.log('https://randomuser.me/api/?results=10');
    this.dataService.getNewData(10).subscribe(
      (data) => {
        this.users = data['results'];
      },
      (error) => console.log(error),
      () => console.log('completed')
    );
  }

  onStore(users) {
    this.dataService.replaceData(users);
    this.fullData = this.dataService.getFullData();
  }

  ngOnInit() {
    this.makeRequest();
  }
}
