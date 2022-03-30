import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'elias';
  nombreUpper: string = 'ELIAS';
  nombreCompleto: string = 'eLiAs IbaÑeZ';

  fecha: Date = new Date();
}
