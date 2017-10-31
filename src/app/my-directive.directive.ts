import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyDirective]',
})
export class MyDirectiveDirective implements OnInit {

  public background: string;

  @HostBinding('style.background') get getBackground(){
    return this.background;
  }

  @HostListener('click', ['$event']) onMouseEnter() {
    this.background = 'red';
  }

  @HostListener('window:resize', ['$event']) onWindowResize($event) {
    console.log($event);
  }

  ngOnInit(): void {
    this.element.nativeElement.click();
  }

  constructor(private element: ElementRef) {}


}
