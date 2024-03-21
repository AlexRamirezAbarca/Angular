import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifService {

  private _tagHistory : string[] = [];

  constructor() { }

  get tagsHistory() {
    return [...this._tagHistory];
  }


  searchTag ( tag : string) : void{
    this._tagHistory.unshift(tag);

    console.log(this._tagHistory);

  }

}
