import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  public apiUrl : string = 'https://restcountries.com/v3.1'


  constructor(private http: HttpClient) {}

  searchCapital(term : string) : Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url).pipe(
      catchError(error => {
       console.log(error);
       return  of([])
      }
      )
    );
  }

  searchCountry (term : string) : Observable<Country[]>{
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<Country[]>(url).pipe(
      catchError(error => {
        console.log(error);
        return of([])
      })
      )
  }

  searchRegion (region : string) : Observable<Country[]>{
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url).pipe(
      catchError(error => {
        console.log(error);
        return of([])
      })
      )
  }

}
