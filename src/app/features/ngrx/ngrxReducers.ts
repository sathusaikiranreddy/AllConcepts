import { createReducer } from "@ngrx/store";
import { PostState } from "./ngrxState";


export const initialPostState: PostState= {
    posts :[
        {id: "1", title :"1", description : "1"}
      ]
}
export const _postReducer  = createReducer(initialPostState)

export function postReducer(state : any, action: any){
    return _postReducer(state, action);
}