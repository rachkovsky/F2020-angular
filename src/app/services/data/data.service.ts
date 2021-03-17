import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  counter: number = 0;
  counterSubject = new BehaviorSubject<number>(0);

  getCounter() {
    return this.counterSubject;
  }

  setCounter() {
    this.counter++;
    this.counterSubject.next(this.counter);
  }

  constructor() { }
}
