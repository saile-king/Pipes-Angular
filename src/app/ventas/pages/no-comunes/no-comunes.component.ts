import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Kenny';
  genero: string = 'femenino'

  invitacionMapp = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria','Juan','Pedro','Elias'];
  clientesMapp = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  cambiarPersona () {
    this.nombre = 'Elias';
    this.genero = 'masculino';
  }

  borrarCliente() {
    this.clientes.shift();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Elias',
    edad: 28,
    direccion: 'Cartagena de Indias'
  }

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Acuaman',
      vuela: false
    },
    {
      nombre: 'Batman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data de promesa');
    }, 3500);
  });
}
