import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { debug } from 'util';

@Directive({
  selector: '[appTest]',
})
export class TestDirective {

  @Input()
  set index(i) {
    if (i === 3) {
      this.render.setAttribute(this.element.nativeElement, 'focus', 'on');
    }
  }

  constructor(private element: ElementRef, private render: Renderer2) { }

}
