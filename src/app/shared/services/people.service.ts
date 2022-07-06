import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople():Observable<any> {
    let peopleArray = [
      {
        firstName: 'Ana',
        lastName: 'Veloso',
        age: '31'
      },
      {
        firstName: 'Joao',
        lastName: 'Pereira',
        age: '56'
      },
      {
        firstName: 'Aline',
        lastName: 'Aragao',
        age: '17'
      },
    ]
    return of(peopleArray)
  }
}
