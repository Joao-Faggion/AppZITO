import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MasterService } from "../../master.service";
import { LOAD_BLOG, addBlog, addBlogSuccess, deleteBlog, deleteBlogSuccess, loadBlogFail, loadBlogSuccess, updateBlog, updateBlogSuccess } from "./blog.actions";
import { EMPTY, catchError, exhaustMap, map, of } from "rxjs";
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
                    catchError((_error) => of(loadBlogFail({errorText:_error.message})))
                )
            })
        )
    );

    _addBlog = createEffect(() => 
        this.action$.pipe(
            ofType(addBlog),
            exhaustMap((action) => {
                return this.service.createBlog(action.bloginput).pipe(
                    map((data) => {
                        return updateBlogSuccess({bloginput: data as BlogModel})
                    }),
                    catchError((_error) => of(loadBlogFail({errorText:_error.message})))
                )
            })
        )    
    );

    _updateBlog = createEffect(() => 
    this.action$.pipe(
        ofType(updateBlog),
        exhaustMap((action) => {
            return this.service.updateBlog(action.bloginput).pipe(
                map((data) => {
                    return updateBlogSuccess({bloginput: action.bloginput})
                }),
                catchError((_error) => of(loadBlogFail({errorText:_error.message})))
            )
        })
    )    
);
    
    _deleteBlog = createEffect(() => 
        this.action$.pipe(
            ofType(deleteBlog),
            exhaustMap((action) => {
                return this.service.deleteBlog(action.id).pipe(
                    map(() => {
                        return deleteBlogSuccess({id: action.id})
                    }),
                    catchError((_error) => of(loadBlogFail({errorText:_error.message})))
                )
            })
        )    
    );

}