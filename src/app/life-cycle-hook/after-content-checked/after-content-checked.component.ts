import { AfterContentChecked, Component } from '@angular/core';

@Component({
  selector: 'app-after-content-checked',
  template: `<ng-content></ng-content>`,
})
export class AfterContentCheckedComponent implements AfterContentChecked {
  ngAfterContentChecked(): void {
    console.log('5. AfterContentChecked');
  }
}
