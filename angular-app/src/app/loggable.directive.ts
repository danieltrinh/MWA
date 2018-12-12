import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[loggable]'
})
export class LoggableDirective {

  @HostListener('dblclick') log(){
    console.log('DIV element has been double clicked')
  }

  @HostBinding('style.border') border = '1px solid blue';

  constructor() { }

}
