import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaypalService {

  private messageSource = new BehaviorSubject<boolean>(false);
  currentMessage = this.messageSource.asObservable();

  private callFunctionSubject = new Subject<void>();
  callFunction$ = this.callFunctionSubject.asObservable();

  
  
  constructor() { }
  
  changeMessage(message: boolean) {
    this.messageSource.next(message);
  }
  
  triggerFunctionCall() {
    this.callFunctionSubject.next();
  }
}
