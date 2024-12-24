import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

declare var $: any;

@Directive({
  //Bir directive'in directiv olabilmesi için @Directive dekoratörü kullanılmalıdır.
  selector: '[appExample]', //Uygulama içinde kullanmamızı sağlayan referans isim.
  //Selector özelliği köşeli parantez içinde yazılıyor ise bu directive bir attribute directive oluyor. Eğer nokta ile başlıyor ise bu bir class directive oluyor.
  //selector: '[appExample]' //Uygulama içinde kullanılacak olan isimdir. (örnek kullanımı: <div appExample></div>)
  //selector: '.appExample' //Uygulama içinde kullanılacak olan isimdir. (örnek kullanımı: <div class="appExample"></div>)
})
export class ExampleDirective implements OnInit {
  //Bir directive'in sınıf adının sonunda Directive olması isimlendirme kültürüdür.

  constructor(private element: ElementRef) {
    //Directive ile işaretlenmiş HTML nesenesine erişmek için ElementRef kullanılır.
    function fadeInOut() {
      $(this.element.nativeElement).fadeOut(2000).fadeIn(2000, fadeInOut);
    }
  }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.color;
    this.element.nativeElement.style.color = 'white';
    const fadeInOut = () => {
      $(this.element.nativeElement).fadeOut(2000).fadeIn(2000, fadeInOut);
    };
    fadeInOut();
  }

  @Input() color: string;

  @HostListener('click')
  onClickFunc() {
    alert('clicked');
  }

  @HostBinding('style.color')
  writeingColor: string = 'red';
}

//#Directive Olusturma
//'ng generate directive example' veya 'ng g d example' komutu ile example isminde directive olusturulur.
//Bir directive olusturuldugunda, ana modulde tanimlanmasi gerekmektedir.(declaration kismina eklenir.

//#Directive parametre tanımlama
//Directive'lerin parametre alabilmesi için @Input() dekoratörü kullanılır.
//Örneğin: @Input('appExample') appExample: string; şeklinde tanımlanır.
//Bu tanımlama ile appExample adında bir parametre alınmış olur.

//#Host Listener
//Directive'lerin event dinlemesi için @HostListener dekoratörü kullanılır.
//Örneğin: @HostListener('click') onClick() { console.log('clicked'); } şeklinde tanımlanır.
//Bu tanımlama ile click event'i dinlenmiş olur.

//#HostBinding
//Directive'lerin attribute binding işlemi yapabilmesi için @HostBinding dekoratörü kullanılır.
//Örneğin: @HostBinding('style.backgroundColor') backgroundColor: string; şeklinde tanımlanır.
//Bu tanımlama ile backgroundColor adında bir attribute binding işlemi yapılabilir.
