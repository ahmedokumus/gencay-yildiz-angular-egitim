import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-init',
  template: ` <p>OnInit</p> `,
})
export class OnInitComponent implements OnInit {
  ngOnInit(): void {
    console.log('2. OnInit');
  }
}
