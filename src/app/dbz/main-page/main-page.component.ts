import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})
export class MainPageComponent{

  nuevo: Personaje={
    nombre: 'Cell',
    poder: 13000
  }

  //Inyección de dependencias
  constructor(){}
}
