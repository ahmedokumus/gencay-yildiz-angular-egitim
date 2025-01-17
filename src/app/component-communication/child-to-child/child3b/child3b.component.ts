import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child3b',
  template: ` <p>Child 3B Component --- {{ message }}</p> `,
})
export class Child3bComponent {
  @Input() message: string;
}
