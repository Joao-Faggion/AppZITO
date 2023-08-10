//ANGULAR
import { Component } from '@angular/core';

//NGRX
import { Store } from '@ngrx/store';

//COUNTER ACTIONS
import { changechannelname, decrement, increment, reset } from 'src/app/shared/store/counter.actions';

//INTERFACE
import { CounterModel } from 'src/app/shared/store/counter.model';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.scss']
})
export class CounterbuttonComponent {

  constructor( private store: Store<{counter: CounterModel}> ) { }

  OnIncrement(){
    this.store.dispatch(increment());

  }

  OnDecrement(){
    this.store.dispatch(decrement());
    
  }

  OnReset(){
    this.store.dispatch(reset());
    
  }

  OnRename(){
    this.store.dispatch(changechannelname({channel: 'Welcome to João Fagion'}));
  }

}
