import { Directive, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[appTest]',
})
export class TestDirective implements OnInit {


  @Input('index')
  set index(i) {
      console.log(i);
  }

  @Output()
  get myValue(): EventEmitter<any> {
    return new EventEmitter();
  }

  constructor(private element: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {
    this.test();
  }

  test() {
    this.index.emit('test');
  }

}
