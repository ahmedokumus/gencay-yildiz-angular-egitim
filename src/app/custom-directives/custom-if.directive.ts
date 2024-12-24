import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

//Structural Directive'ler kendi içerisinde setter property'ler üzerinden davranışlarını belirlerler.

@Directive({
  selector: '[appCustomIf]',
})
export class CustomIfDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input() set appCustomIf(value: boolean) {
    if (value) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
