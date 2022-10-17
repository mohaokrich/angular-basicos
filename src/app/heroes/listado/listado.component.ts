import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['spiderman','ironman','hulk','Thor','Capitan america'];
  heroeBorrado: string = '';


  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }


  constructor() { }

  ngOnInit(): void {
  }

}
