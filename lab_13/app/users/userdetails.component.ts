import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-userdetails',
  template: `
    <pre>{{userData| json}}</pre>
  `,
  styles: [],
  providers: [HttpClient, DataService]
})
export class UserdetailsComponent implements OnInit {

  public userData;

  constructor(public http: HttpClient, public route: ActivatedRoute, public dataService: DataService) {

  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userData = this.dataService.getUserById(params.id);

    });
  }
}
