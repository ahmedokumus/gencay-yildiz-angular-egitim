import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-after-view-init',
  template: ``,
})
export class AfterViewInitComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    console.log('6. AfterViewInit');
  }
}
