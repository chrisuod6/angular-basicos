import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    public nombre: string = 'Iroman';
    public edad: number = 45;

    get nombreCapitalizado(): string {

        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {

        return `${this.nombre} - ${this.edad}`;

    }

    cambiarHeroe() {

        this.nombre = 'Spiderman';
    }

    cambiarEdad() {
        this.edad = 30;
    }
}