import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  public listadoHeroes: string[] = ['Spiderman', 'Hulk', 'Thor', 'Capitán América', 'Ironman'];
  public heroeBorrado: string ='';

  public borrar() {

    // const heroeBorrado = this.listadoHeroes.shift();
    // this.heroeBorrado.push(heroeBorrado || '');

    this.heroeBorrado =this.listadoHeroes.shift()|| '';

  }
}
