import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent {
  text = 'Burası bir text interpolation çalışmasıdır.';
  property = 'Burası bir property binding çalışmasıdır.';
  twoWay: string = '';
  twoWayCount: string;
  updateTwoWayCount() {
    this.twoWayCount = this.twoWay.length.toString();
  }
}
