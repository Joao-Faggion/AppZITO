import { blogReducer } from "../BLOG/blog.reducer";
import { counterReducer } from "../counter.reduce";

export const appState = {
    counter: counterReducer,
    blog: blogReducer
}