import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "../counterNgrx/counterState";
import { PostSelector, PostState } from "./ngrxState";

const getPostState = createFeatureSelector<PostState>(PostSelector);

export const getPostsSelector = createSelector(getPostState, state =>{
    return state.posts
})
const getCounterState = createFeatureSelector<CounterState>('counter');

export const getCounterSelector = createSelector(getCounterState, state =>{
    return state.counter
})