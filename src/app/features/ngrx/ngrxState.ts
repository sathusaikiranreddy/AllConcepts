import { counterReducer } from "../counterNgrx/counterReducer";
import { CounterState } from "../counterNgrx/counterState";
import { postReducer } from "./ngrxReducers";

export interface Post{
    id : string,
    title : string,
    description : string
}

 export interface PostState{
     posts : Post[];
 }

 export const PostSelector = "post"

  export interface AppState  { 
    counter : CounterState,
    post : PostState
  }

  export const AppReducer =  {
    counter : counterReducer,
    post : postReducer
  }