why we need to use ngrx?
for complex application we need to properly structure our application and component communication.
suppose we have some data and that should refect in all over application 
and all other components should responde to that change.

ngrx main goal is to manage the state. state means data which is our applicaiton is having.

A Pure Function is a function (a block of code) that always returns the same result 
if the same arguments are passed.
Key Concepts:
    Actions describe unique events that are dispatched from components and services.
    State changes are handled by pure functions called reducers that take the current state and the latest action to compute a new state.
    Selectors are pure functions used to select, derive and compose pieces of state.
    State is accessed with the Store, an observable of state and an observer of actions.

Redux patter is only one way direction not bi-directional.
state is immutable it cannot be changed. instead i will assin a new one to change the state.
component get data automatically if any state gets changed using selector.

**************************
ngrx is single centralized store.
so ngrx is basically used for component communication. suppose without ngrx communcation was done using 
services but if the application is becoming bigger and bigger we need more services. so to optimize this 
we use ngrx.

what is store ?
store is nothing but its set of javscript object which is useful for application. so that data can be used all 
over application.
**************************