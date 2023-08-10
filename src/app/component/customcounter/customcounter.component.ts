//ANGULAR
import { Component, OnInit } from '@angular/core';

//NGRX
import { Store } from '@ngrx/store';

//RXJS
import { Subscription } from "rxjs";

//SHARED COUNTER
import { customincrement } from 'src/app/shared/store/counter.actions';
import { CounterModel } from 'src/app/shared/store/counter.model';
import { getchannelname } from 'src/app/shared/store/counter.selector';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrls: ['./customcounter.component.scss']
})
export class CustomcounterComponent implements OnInit {

  constructor( private store: Store<{counter: CounterModel}> ) { }

  ngOnInit(): void {
      
    this.countersubscribe = this.store.select(getchannelname).subscribe(data => {
      this.channelname = data;
      console.log('custom counter')
    })
  }

  counterInput!: number;
  actionType = 'add';
  channelname = '';
  countersubscribe!: Subscription;




  OnIncrement(){
    this.store.dispatch(customincrement({value: +this.counterInput, action: this.actionType}))
  }

}
