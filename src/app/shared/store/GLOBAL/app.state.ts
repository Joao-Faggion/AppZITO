import { blogReducer } from "../BLOG/blof.reducer";
import { counterReducer } from "../counter.reduce";

export const appState = {
    counter: counterReducer,
    blog: blogReducer
}