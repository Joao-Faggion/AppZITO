import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterModel } from 'src/app/shared/store/counter.model';
import { Observable, Subscription } from 'rxjs';
import { getcounter } from 'src/app/shared/store/counter.selector';
import { AppStateModel } from 'src/app/shared/store/GLOBAL/appstate.model';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.scss']
})
export class CounterdisplayComponent implements OnInit, OnDestroy {

  constructor( private store: Store<AppStateModel> ) { }
  
  ngOnDestroy(): void {
    if(this.countersubscribe){
       this.countersubscribe.unsubscribe();
     };
  }

  counterDisplay!: number;
  channelname = '';
  countersubscribe!: Subscription;
  counter$!: Observable<CounterModel>;

  ngOnInit(): void {
     this.countersubscribe = this.store.select(getcounter).subscribe(data =>{
       this.counterDisplay = data;
       console.log('counter display')

     })
    
    this.counter$ = this.store.select('counter');
    
  }  

    

}
