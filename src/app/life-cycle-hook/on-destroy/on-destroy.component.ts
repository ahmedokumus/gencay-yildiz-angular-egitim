import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-on-destroy',
  template: ``,
})
export class OnDestroyComponent implements OnDestroy {
  ngOnDestroy(): void {
    console.log('8. OnDestroy');
  }
}
