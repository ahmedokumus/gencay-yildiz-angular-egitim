import { Component } from '@angular/core';

@Component({
  selector: 'app-parent3',
  template: `
    <p>Parent 3 Component</p>
    <app-child3a (data)="childData($event)"></app-child3a>
    <app-child3b [message]="child3AMessage"></app-child3b>
  `,
})
export class Parent3Component {
  child3AMessage: string;
  childData(message: string) {
    this.child3AMessage = message;
  }
}
