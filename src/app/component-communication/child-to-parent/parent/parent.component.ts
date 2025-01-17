import { Component } from '@angular/core';

@Component({
  selector: 'app-parent2',
  template: `
    <p>parent works2!</p>
    <app-child2 (dataEvent)="childEvent($event)"></app-child2>
    <p>{{ message }}</p>
  `,
})
export class ParentComponent {
  message: string = '';

  childEvent(obj: any) {
    console.log(obj);
    this.message = obj.message;
  }
}
