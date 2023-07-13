import { BlogModel, Blogs } from "../BLOG/blog.model";
import { CounterModel } from "../counter.model";

export interface AppStateModel{
    counter: CounterModel,
    blog: Blogs
} 