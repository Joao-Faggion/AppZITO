import { createAction, props } from "@ngrx/store";
import { BlogModel } from "./blog.model";

export const loadBlog = createAction('loadblog');

export const addBlog = createAction('addblog', props<{bloginput: BlogModel}>());

export const updateBlog = createAction('updateblog', props<{bloginput: BlogModel}>());