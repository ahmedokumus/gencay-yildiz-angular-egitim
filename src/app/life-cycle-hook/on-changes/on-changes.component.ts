import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  template: `
    <p>OnChanges</p>
    <p>{{ data }}</p>
  `,
})
export class OnChangesComponent implements OnChanges {
  @Input() data: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('1. OnChanges');
  }
}
