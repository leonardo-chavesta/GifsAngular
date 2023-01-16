import { Component } from '@angular/core';
import { GifsService } from '../../gifs/service/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  constructor(private gisfService: GifsService) { }

  buscar(termino:string ){
    this.gisfService.buscarGifs(termino);
  }
  get historial() {
    return this.gisfService.historial;
  }

}
