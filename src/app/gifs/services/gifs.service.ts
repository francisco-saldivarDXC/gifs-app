import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GifsResponse, Gif } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private gifs : Gif[] = [];
  private _tagHistory : string[] = [];

  private apiKey : string = 'H1uqIHWRgULvr4q61fdL7sRTzB8164pw';
  private serviceURL : string = "https://api.giphy.com/v1/gifs";

  constructor( private http : HttpClient ) {
    if( !localStorage.getItem('history') ) return;

    this._tagHistory = JSON.parse( localStorage.getItem('history')! );
    this.searchGifs(this._tagHistory[0]);
  }

  get tagHistory(): string[] {
    return [...this._tagHistory];
  }

  private organizeTagHistory(tag: string) {
    tag = tag.toLowerCase();
    if (this._tagHistory.includes(tag)) {
      //Quita el tag
      this._tagHistory = this._tagHistory.filter(oldTag => oldTag !== tag);
    }
    //Coloca el tag de nuevo al principio
    this._tagHistory.unshift(tag);
    //Recortar el arreglo a 10 elementos
    this._tagHistory = this.tagHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  async searchGifs(tag: string) {
    if (tag.length <= 0) return;

    this.organizeTagHistory(tag);

    // Peticion HTTP con fetch
    // const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${tag}&limit=10`);
    // const { data } = await res.json();
    // console.log(data);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);
    //Peticion HTTP con HTTPCLIENT
    this.http.get<GifsResponse>(`${this.serviceURL}/search`, { params })
      .subscribe( resp => {
        this.gifs = resp.data;
        console.log(this.gifs);
      });
  }

  get getGifs() : Gif[] {
    return this.gifs;
  }

  private saveLocalStorage() : void {
    localStorage.setItem('history', JSON.stringify(this._tagHistory));
  }
}
