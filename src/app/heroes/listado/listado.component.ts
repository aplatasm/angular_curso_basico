import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

    
   
    heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor','Capitán América']
    heroeBorrado: string = '';

   
    borrarHeroe (): void {
      // el array puede ser undefined ponemos el || ''
       this.heroeBorrado =  this.heroes.shift() || '';
      // console.log(' Heroe Borrado: ' + heroeBorrado);
    }
}
