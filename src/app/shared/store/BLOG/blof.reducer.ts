import { createReducer, on } from "@ngrx/store";
import { blogState } from "./blog.state";
import { addBlog, loadBlog } from "./blog.actions";

const _blogReducer = createReducer(blogState,
    on(loadBlog, (state) => {
        return {
            ...state
        };
    }),
    on(addBlog, (state, action) => {
        const _blog  = {...action.bloginput}
        console.log(_blog)
        _blog.id = state.blogList.length+1
        return{
            ...state, 
            blogList: [...state.blogList, _blog]
        }
    })
    
    )


    export function blogReducer(state: any, action: any) {
        return _blogReducer(state, action);
    
    }