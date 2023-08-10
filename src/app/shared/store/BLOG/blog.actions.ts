//NGRX
import { createAction, props } from "@ngrx/store";

//INTERFACES
import { BlogModel } from "./blog.model";
import { Usuario } from "src/app/Interface/IUsuarios";


//BLOG ACTIONS SUCCESS
export const LOAD_BLOG_SUCCESS = '[Blog Page] load blog success';
export const ADD_BLOG_SUCCESS = '[Blog Page] Add blog success';
export const DELETE_BLOG_SUCCESS = '[Blog Page] Delete blog success';
export const UPDATE_BLOG_SUCCESS = '[Blog Page] Update blog success';

//BLOG ACTIONS FAIL
export const LOAD_BLOG_FAIL = '[Blog Page] load blog failed';

//BLOG ACTIONS
export const LOAD_BLOG = '[Blog Page] load blog';
export const ADD_BLOG = '[Blog Page] Add blog';
export const UPDATE_BLOG = '[Blog Page] Update blog';
export const DELETE_BLOG = '[Blog Page] Delete blog';

//USUARIOS ACTIONS
export const UPDATE_USUARIO = 'Update usuario';
export const UPDATE_USUARIO_SUCCESS = 'Update usuario success';

//CREATE ACTIONS BLOG SUCCESS
export const loadBlogSuccess = createAction(LOAD_BLOG_SUCCESS, props<{bloglist: BlogModel[]}>());
export const addBlogSuccess = createAction(ADD_BLOG_SUCCESS, props<{bloginput: BlogModel}>());
export const updateBlogSuccess = createAction(UPDATE_BLOG_SUCCESS, props<{bloginput: BlogModel}>());
export const deleteBlogSuccess = createAction(DELETE_BLOG_SUCCESS, props<{id: number}>());

//CREAT ACTIONS BLOG FAIL
export const loadBlogFail = createAction(LOAD_BLOG_FAIL, props<{errorText: string}>());

//CREATE ACTIONS BLOG
export const loadBlog = createAction(LOAD_BLOG);
export const addBlog = createAction(ADD_BLOG, props<{bloginput: BlogModel}>());
export const updateBlog = createAction(UPDATE_BLOG, props<{bloginput: BlogModel}>());
export const deleteBlog = createAction(DELETE_BLOG, props<{id: number}>());

//CREATE ACTIONS USUARIOS
export const updateUsuario = createAction(UPDATE_USUARIO, props<{usuarioInput: Usuario}>());
export const updateUsuarioSuccess = createAction(UPDATE_USUARIO_SUCCESS, props<{usuarioInput: Usuario}>());
