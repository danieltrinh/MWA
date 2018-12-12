import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
    <ul>
      <li *ngFor="let s of strings">
        <app-dump [data]="s"></app-dump>
      </li>
    </ul>
  `,
  styles: []
})
export class SmartComponent {
  @Input() strings;

  constructor() {
  }

}
