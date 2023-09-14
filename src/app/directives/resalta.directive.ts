import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResalta]'
})
export class ResaltaDirective implements OnChanges {
  @Input() appResalta = '';
  @Input() color = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }
  ngOnChanges(): void {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor',  this.appResalta || 'yellow');
    this.renderer.setStyle(this.el.nativeElement, 'color',  this.color || 'black');
  }
}

/*
  constr ama
  onChanges c=undefd
  ngOnInit

  <a *appRole="admin">item1</a>
  <a *appRole="operador"> item2
  item3


*/
