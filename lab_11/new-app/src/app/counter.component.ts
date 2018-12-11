import {Component, Input, Output, EventEmitter, DoCheck} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <fieldset>
      <div class="left-column column">CounterComponent</div>
      <div class="right-column column">
        <fieldset>
          <button (click)="decrease()">-</button>
          {{counter}}
          <button (click)="increase()">+</button>
        </fieldset>
      </div>
    </fieldset>
  `,
  styles: ['.column {display: inline-block;}', 'fieldset{display: inline-block}']
})
export class CounterComponent{
  @Input() counter;
  @Input() componentCounterValue;
  @Output() counterChange = new EventEmitter();

  constructor() {
    this.counterChange.emit(this.counter);
  }

  increase() {
    this.counter++;
  }

  decrease() {
    this.counter--;
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
    this.counterChange.emit(this.counter);
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(msg: string) {
    console.log(msg);
  }


}
