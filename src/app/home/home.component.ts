import { Observer } from 'rxjs/Observer';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { Subscription } from "rxjs/Subscription";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numbersObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {

    const myObservable = Observable.create((observer: Observer<string> ) => {
      setTimeout(() => {
        observer.next('first package');
      } ,2000);
      setTimeout(() => {
        observer.next('second package');
      } , 4000);
      setTimeout(() => {
        observer.complete();
      } , 5000);
      setTimeout(() => {
        observer.next('third package');
      } , 5000);
    });
    this.customObsSubscription = myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('completed'); }  
    );
  }

  ngOnDestroy() { 
    this.customObsSubscription.unsubscribe();
  }

}
