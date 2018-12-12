import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dump',
  template: `{{data}}`,
  styles: []
})
export class DumpComponent {
  @Input() data;

  constructor() {
  }
}
