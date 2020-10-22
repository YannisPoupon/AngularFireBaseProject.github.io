import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe()
  }

  secondes : number;
  counterSubscription : Subscription

  ngOnInit(): void {
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      (value:number) => {
        this.secondes = value;
      }, 
      (error : any) =>  {
        console.log('Error')
      },
      () => console.log('Observable complété')
    ) 
  }

  
}


