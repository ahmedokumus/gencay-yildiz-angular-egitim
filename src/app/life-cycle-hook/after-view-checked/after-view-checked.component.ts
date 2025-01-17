import { AfterViewChecked, Component } from '@angular/core';

@Component({
  selector: 'app-after-view-checked',
  template: ``,
})
export class AfterViewCheckedComponent implements AfterViewChecked {
  ngAfterViewChecked(): void {
    console.log('7. AfterViewChecked');
  }
}
