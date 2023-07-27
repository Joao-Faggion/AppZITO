import { createAction, props } from "@ngrx/store";
import { BlogModel } from "./blog.model";
import { Usuario } from "src/app/Interface/IUsuarios";

export const LOAD_BLOG_SUCCESS = '[Blog Page] load blog success';

export const LOAD_BLOG_FAIL = '[Blog Page] load blog failed';

export const LOAD_BLOG = '[Blog Page] load blog';

export const ADD_BLOG_SUCCESS = '[Blog Page] Add blog success';

export const ADD_BLOG = '[Blog Page] Add blog';

export const UPDATE_BLOG = '[Blog Page] Update blog';

export const UPDATE_USUARIO = 'Update usuario';

export const UPDATE_USUARIO_SUCCESS = 'Update usuario success';

export const UPDATE_BLOG_SUCCESS = '[Blog Page] Update blog success';

export const DELETE_BLOG = '[Blog Page] Delete blog';

export const DELETE_BLOG_SUCCESS = '[Blog Page] Delete blog success';


export const loadBlog = createAction(LOAD_BLOG);

export const loadBlogSuccess = createAction(LOAD_BLOG_SUCCESS, props<{bloglist: BlogModel[]}>());

export const loadBlogFail = createAction(LOAD_BLOG_FAIL, props<{errorText: string}>());

export const addBlog = createAction(ADD_BLOG, props<{bloginput: BlogModel}>());

export const addBlogSuccess = createAction(ADD_BLOG_SUCCESS, props<{bloginput: BlogModel}>());

export const updateBlog = createAction(UPDATE_BLOG, props<{bloginput: BlogModel}>());

export const updateUsuario = createAction(UPDATE_USUARIO, props<{usuarioInput: Usuario}>());

export const updateUsuarioSuccess = createAction(UPDATE_USUARIO_SUCCESS, props<{usuarioInput: Usuario}>());

export const updateBlogSuccess = createAction(UPDATE_BLOG_SUCCESS, props<{bloginput: BlogModel}>());

export const deleteBlog = createAction(DELETE_BLOG, props<{id: number}>());

export const deleteBlogSuccess = createAction(DELETE_BLOG_SUCCESS, props<{id: number}>());