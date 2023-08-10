import { inject } from '@angular/core';

//ANGULAR ROUTER
import { CanActivateFn, Router } from '@angular/router';

//API
import { MasterService } from '../shared/master.service';


export const authGuard: CanActivateFn = (route, state) => {

  const currentmenu = route.url[0].path;
  const router = inject(Router);
  const service = inject(MasterService);

  if(service.haveAccess()){
  
    return true;

  // if(currentmenu=='blog') {
  //   return true;
  // } else {
  //   alert('access denied'); 
  //   router.navigate(['']);
  //   return false;
  // };
  } else {
    alert('access denied'); 
    router.navigate(['']);
    return false;
  }
};
