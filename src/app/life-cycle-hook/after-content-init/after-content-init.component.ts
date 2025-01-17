import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-after-content-init',
  template: ` <ng-content> </ng-content> `,
})
export class AfterContentInitComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    console.log('4. AfterContentInit');
  }
}
