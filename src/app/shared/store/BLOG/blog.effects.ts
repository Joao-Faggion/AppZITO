import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MasterService } from "../../master.service";
import { LOAD_BLOG, addBlog, addBlogSuccess, deleteBlog, deleteBlogSuccess, loadBlogFail, loadBlogSuccess, updateBlog, updateBlogSuccess, updateUsuario, updateUsuarioSuccess } from "./blog.actions";
import { EMPTY, catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { BlogModel } from "./blog.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { emptyAction, showAlert } from "../GLOBAL/app.actions";

@Injectable()

export class BlogEffects {

    constructor(private action$: Actions, private service: MasterService, private snackBar: MatSnackBar) {

    }

    _blog = createEffect(() =>
        this.action$.pipe(
            ofType(LOAD_BLOG),
            exhaustMap((action) => {
                return this.service.getAllBlogs().pipe(
                    map((data) => {
                        return loadBlogSuccess({ bloglist: data });
                    }),
                    catchError((_error) => of(loadBlogFail({ errorText: _error.message })))
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
                        return updateBlogSuccess({ bloginput: data as BlogModel })
                    }),
                    catchError((_error) => of(loadBlogFail({ errorText: _error.message })))
                )
            })
        )
    );

    _updateBlog = createEffect(() =>
        this.action$.pipe(
            ofType(updateBlog),
            switchMap(action =>
                this.service.updateBlog(action.bloginput).pipe(
                    switchMap(res => of(
                        updateBlogSuccess({ bloginput: action.bloginput }),
                        showAlert({ message: 'Blog Alterado Com Sucesso', actionResult: 'pass' })
                    )),
                    catchError((_error) => of(showAlert({ message: 'Não foi possível pois' + _error.message, actionResult: 'Fail' })))
                ))
        )
    );

    _deleteBlog = createEffect(() =>
        this.action$.pipe(
            ofType(deleteBlog),
            exhaustMap((action) => {
                return this.service.deleteBlog(action.id).pipe(
                    map(() => {
                        return deleteBlogSuccess({ id: action.id })
                    }),
                    catchError((_error) => of(loadBlogFail({ errorText: _error.message })))
                )
            })
        )
    );

    _showAlert = createEffect(() =>
        this.action$.pipe(
            ofType(showAlert),
            exhaustMap(action => {
                return this.showSnackBarALert(action.message, action.actionResult).afterDismissed().pipe(
                    map(() => {
                        return emptyAction();
                    })
                )
            })
        )
    );

    showSnackBarALert(message: string, actionResult: string = 'fail') {
        let _class = actionResult == 'pass'?'green-snackbar':'red-snackbar'
        return this.snackBar.open(message, 'Ok', {
            verticalPosition: 'top',
            horizontalPosition: 'end',
            panelClass: [_class],
            duration: 2500
        })
    }

    showSnackBarAlert(message: string, actionResult: string) {
        let _class = actionResult == 'pass' ? 'green-snackbar' : 'red-snackbar'
        console.log(_class)
        return this.snackBar.open(message, 'OK', {
            verticalPosition: 'top',
            horizontalPosition: 'end',
            panelClass: [_class]
        });
    }

}