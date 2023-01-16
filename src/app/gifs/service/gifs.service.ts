import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interfaces';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private API: string = 'sihAtq4G2BCDn0E6Q3L4gLFHHIjVQzYY'
  private _historial: string[] = []
  public resultado: Gif[] = []
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs'

  constructor(
    private http: HttpClient,


  ) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultado = JSON.parse(localStorage.getItem('DataLocal')!)
  }
  get historial() {
    return [...this._historial];
  }




  buscarGifs(query: string = '') {
    query = query.trim().toLocaleLowerCase()
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10)
      localStorage.setItem('historial', JSON.stringify(this._historial))
    }
    const params = new HttpParams()
      .set('api_key', this.API)
      .set('limit', '10')
      .set('q', query);
    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params })
      .subscribe((res) => {
        this.resultado = res.data;
        localStorage.setItem('DataLocal', JSON.stringify(this.resultado))
      })
  }
}
