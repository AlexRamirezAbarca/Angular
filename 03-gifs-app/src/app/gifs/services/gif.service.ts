import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({providedIn: 'root'})
export class GifService {

  public gifsList : Gif[] = [];



  private _tagHistory : string[] = [];

  private apikey : string = '4vznC2ixXNYwCaiIpOwYjsbN8M26vr60';
  private serviceUrl : string = 'https://api.giphy.com/v1/gifs';
  constructor(private http : HttpClient) { }

  get tagsHistory() {
    return [...this._tagHistory];
  }

  private organizeHistory(tag : string){
    tag = tag.toLowerCase();

    if (this._tagHistory.includes(tag)){
      this._tagHistory = this._tagHistory.filter( (oldTag) => oldTag !== tag)
    }

    this._tagHistory.unshift(tag);

    this._tagHistory = this.tagsHistory.splice(0,10);
  }

  searchTag ( tag : string) : void{

    if(tag.length === 0) return;

    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key', this.apikey)
    .set('limit', '10')
    .set('q', tag)


    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params})
    .subscribe( resp => {
      this.gifsList = resp.data;
    });

  }

}
