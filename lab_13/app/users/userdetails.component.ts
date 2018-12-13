import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-userdetails',
  template: `
    <pre>{{userData| json}}</pre>
  `,
  styles: [],
  providers: [HttpClient]
})
export class UserdetailsComponent implements OnInit {

  public userData;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://randomuser.me/api/?uuid=00a08ed6-ea51-4852-ac50-18a7f7128ad4')
      .subscribe(
        (data) => {
          this.userData = data;
        },
        (err) => console.log(err),
        () => console.log('completed')
      );
  }

}
