import { Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs';
import { AppareilService } from './services/appareil.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { reject } from '../../node_modules/@types/q';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  secondes: number;
  counterSubscrpition: Subscription;
  constructor() {}

  ngOnInit() {
    const counter = interval(1000);
    this.counterSubscrpition = counter.subscribe(
      (value: number) => {
        this.secondes = value;
      }
    );
  }
  ngOnDestroy() {
    this.counterSubscrpition.unsubscribe();
  }
}
