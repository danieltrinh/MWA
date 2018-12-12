import {Directive, ElementRef, HostBinding, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[isVisible]'
})
export class IsVisibleDirective {
  @Input() display=true;
  @HostBinding('style.display') myDisplay;

  constructor(private element: ElementRef, private render2: Renderer2) {

  }

  ngOnInit() {
    if(!this.display)
      this.myDisplay = 'none';
  }


}
