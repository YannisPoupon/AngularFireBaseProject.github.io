import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  appareils: any[];
  appareilSubscription: Subscription;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils : any[])=> {
        this.appareils = appareils
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onAllume() {
    this.appareilService.switchOnAll();
  }

  onEteint() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }

}
