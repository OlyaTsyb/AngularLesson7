import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';


@Directive({
  selector: '[appMouseLeave]'
})
export class MouseLeaveDirective {

  constructor(private element: ElementRef) {
  }

  @HostListener('mouseleave')
  mouseLeave(): void {
    this.element.nativeElement.style.color = 'black';
  }
}
