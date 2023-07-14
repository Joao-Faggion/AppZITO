import { createReducer, on } from "@ngrx/store";
import { blogState } from "./blog.state";
import { addBlog, deleteBlog, loadBlog, updateBlog } from "./blog.actions";
import { BlogModel } from "./blog.model";

const _blogReducer = createReducer(blogState,
    on(loadBlog, (state) => {
        return {
            ...state
        };
    }),
    on(addBlog, (state, action) => {
        const _blog = { ...action.bloginput }
        _blog.id = state.blogList.length + 1
        return {
            ...state,
            blogList: [...state.blogList, _blog]
        }
    }),
    on(updateBlog, (state, action) => {
        const _blog = { ...action.bloginput }
        const updatedBlog = state.blogList.map(blog => {
            return _blog.id === blog.id ? _blog : blog;
        })
        return {
            ...state,
            blogList: updatedBlog
        }
    }),
    on(deleteBlog, (state, action) => {
        const updatedBlog = state.blogList.filter((data: BlogModel) => {
            return data.id !== action.id;
        })
        return {
            ...state,
            blogList: updatedBlog
        }
    })

)


export function blogReducer(state: any, action: any) {
    return _blogReducer(state, action);

}