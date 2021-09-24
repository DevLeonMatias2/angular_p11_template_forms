import {Component, OnInit, ViewChild} from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {



  // guardar(miFormulario: NgForm) {
  initForm: any;
  guardar() {

    console.log('Posteo correcto');
  }

  nombreValido() {

  }

  precioValido() {

  }
}
