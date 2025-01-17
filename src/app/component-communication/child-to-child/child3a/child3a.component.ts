import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child3a',
  template: `<p>Child 3A Component</p>`,
})
export class Child3aComponent implements OnInit {
  ngOnInit(): void {
    this.data.emit('Data from Child 3A');
  }

  @Output() data: EventEmitter<string> = new EventEmitter();
}
