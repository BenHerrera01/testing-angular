import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService{
    //_ estándar para propiedad privada
    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 8500
        }
      ];
    
    get personajes(): Personaje[]{
        //[... rompe la referencia
        return [...this._personajes];
    }  
    
    constructor(){}

    agregarPersonaje( personaje: Personaje ){
        this._personajes.push(personaje);
    }

}