import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidatorService implements AsyncValidator {

  constructor() { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null >( (subscriber) => {
        console.log({email});
        if(email === 'fernando@google.com'){
          subscriber.next({emailTaken : true});
          subscriber.complete();
          // return;
        }

        subscriber.next(null);
        subscriber.complete();
    });

    return httpCallObservable;
  }



  // validate(control: AbstractControl): Observable<ValidationErrors | null> {
  //     const email = control.value;

  //     return of({
  //       emailTaken: true
  //     })

  // }




}
