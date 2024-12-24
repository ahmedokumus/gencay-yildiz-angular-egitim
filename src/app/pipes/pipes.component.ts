import { Component } from '@angular/core';
import { CustomPipe } from '../custom-pipes/custom.pipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent {
  constructor(private custom: CustomPipe) {
    this.value = custom.transform('Hello World', 0, 5);
  }
  value: string;
  today: any = Date.now();
}
