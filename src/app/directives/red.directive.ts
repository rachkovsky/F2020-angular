import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHide]'
})
export class RedDirective {

  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.style.display = 'none';
  }

}
