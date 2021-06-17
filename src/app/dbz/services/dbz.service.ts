import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [

        {
            nombre: "Goku",
            poder: 15000
        },
        {
            nombre: "Vegeta",
            poder: 8000
        }, {
            nombre: "Krillin",
            poder: 5000
        }
    ];


    get personajes(): Personaje[] {

        return [...this._personajes]

    }

    constructor() { }

    agregarPersonaje(nuevo: Personaje) {

        this._personajes.push(nuevo);
    }


}