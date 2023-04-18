import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  templateUrl: './palindromo.component.html',
  styleUrls: ['./palindromo.component.css']
})
export class PalindromoComponent {
  numero: number = 0;
  resultado : string = '';
  msg : string = '';

  Verificar() {
    const numerodigitado = this.numero.toString();
    const numeroinverso = numerodigitado.split('').reverse().join('');

    if (this.numero < 10) {
      this.msg = 'O número não é valido';
    }

    else {
      if (numerodigitado !== '') {
        if (numerodigitado === numeroinverso) {
          this.msg = 'É palíndromo';
        }

        else {
          this.msg = 'Não é palindromo';
        }
      }
    }
    this.resultado = this.msg;

  }


}
