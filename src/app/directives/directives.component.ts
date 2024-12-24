import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  ngFors: string[] = ['ornek1', 'ornek2', 'ornek3'];
  visible: boolean = false;
  sayi: number = 2;
  style: any = {
    'background-color': 'red',
    color: 'white',
    'font-size': '18px',
  };
}
