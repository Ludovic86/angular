import { Component, OnInit, Input } from '@angular/core';
import { getRenderedText } from '../../../node_modules/@angular/core/src/render3';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() id: number;
  @Input() index: number;





  constructor(private appareilService: AppareilService){}


  ngOnInit() {
  }

  getStatus(){
    return this.appareilStatus;
  }

  getColor(){
    if(this.appareilStatus === 'allumé'){
      return 'green';
    } else if(this.appareilStatus === 'éteint'){
      return 'red';
    }
  }

}
