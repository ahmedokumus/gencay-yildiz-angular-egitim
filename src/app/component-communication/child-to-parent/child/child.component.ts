import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: ` <p>child works2!</p> `,
})
export class ChildComponent implements OnInit {
  ngOnInit(): void {
    this.dataEvent.emit({
      message: "Child Component'dan Parent Component'a gönderilen data",
    });
  }

  @Output() dataEvent: EventEmitter<any> = new EventEmitter();
}
