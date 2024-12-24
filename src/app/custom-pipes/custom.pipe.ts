import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
})
export class CustomPipe implements PipeTransform {
  //Pipe'ın kullanıldığı yerdeki değeri alır ve işler.
  transform(value: string, a: number, b: number): string {
    let valuee = value.slice(a, b);
    return valuee;
  }
}
