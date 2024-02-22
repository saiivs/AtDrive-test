import { Directive, ElementRef, HostListener } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverRow]'
})
export class HoverRowDirective {

  constructor(
    private elem:ElementRef,
    private renderer:Renderer2
    ) { }

    @HostListener('mouseenter') changeRowColour(){
      this.renderer.addClass(this.elem.nativeElement,'hoverRow')
    }

    @HostListener('mouseleave') removeRowColour(){
      this.renderer.removeClass(this.elem.nativeElement,'hoverRow')
    }



}
