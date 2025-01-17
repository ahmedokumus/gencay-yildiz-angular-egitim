import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <p>parent works!</p>
    <app-child
      childData="Paternden child'a gönderilen ve Input ile alınan data"
    ></app-child>
  `,
})
export class ParentComponent {
  ParentData: string = 'Parent Merhaba';
}
