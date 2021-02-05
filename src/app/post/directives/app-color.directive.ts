import {Directive, ElementRef, Host, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appAppColor]'
})
export class AppColorDirective {

  constructor(private element: ElementRef, rendered2: Renderer2) {
    rendered2.setStyle(element.nativeElement, 'background', 'yellow');
  }
  @HostListener('mouseover')
  changeColor(): void {
    this.element.nativeElement.style.color = 'violet';
    this.element.nativeElement.style.cursor = 'pointer';
    this.element.nativeElement.style.fontFamily = 'fantasy';
  }

}
