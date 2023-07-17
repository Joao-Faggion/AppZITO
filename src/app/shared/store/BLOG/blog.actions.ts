import { createAction, props } from "@ngrx/store";
import { BlogModel } from "./blog.model";

export const LOAD_BLOG_SUCCESS = '[Blog Page] load blog success';

export const LOAD_BLOG = '[Blog Page] load blog';

export const loadBlog = createAction(LOAD_BLOG);

export const loadBlogSuccess = createAction(LOAD_BLOG_SUCCESS, props<{bloglist: BlogModel[]}>());

export const addBlog = createAction('addblog', props<{bloginput: BlogModel}>());

export const updateBlog = createAction('updateblog', props<{bloginput: BlogModel}>());

export const deleteBlog = createAction('deleteblog', props<{id: number}>());