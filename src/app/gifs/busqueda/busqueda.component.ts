import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  constructor(private gifsService: GifsService) {}



  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  buscar() {
    const valor = this.txtBuscar.nativeElement.value
    if(valor.trim().length === 0 ) return;
    this.gifsService.buscarGifs( valor)
    this.txtBuscar.nativeElement.value = ''
  }
}
