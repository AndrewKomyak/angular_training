import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnChanges {

  defaultColor = 'blue';
  @Input('appColor') color: string;
  
  constructor(private elRef: ElementRef) {
    console.log(this.elRef);
   }
  ngOnChanges(): void {
      this.elRef.nativeElement.style.color = this.color || this.defaultColor;
  }

}
