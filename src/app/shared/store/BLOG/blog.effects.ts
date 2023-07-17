import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MasterService } from "../../master.service";
import { LOAD_BLOG, loadBlogSuccess } from "./blog.actions";
import { EMPTY, catchError, exhaustMap, map } from "rxjs";
import { BlogModel } from "./blog.model";

@Injectable()

export class BlogEffects {

    constructor(private action$: Actions, private service: MasterService){

    }

    _blog = createEffect(() => 
        this.action$.pipe(
            ofType(LOAD_BLOG), 
            exhaustMap((action) => {
                return this.service.getAllBlogs().pipe(
                    map((data) => {
                        return loadBlogSuccess({ bloglist: data });
                    }),
                    catchError(() => EMPTY)
                )
            })
        )
    );

}