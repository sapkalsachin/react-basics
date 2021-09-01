const redux = require('redux');

//Reducer function
//Responsible for changing the state value 
const counterReducer = (state = {counter: 0}, action) => {
    if(action.type === 'increment'){
        return{
            counter: state.counter + 1,
        }
    }
    if(action.type === 'decrement'){
        return{
            counter: state.counter - 1,
        }
    }
     return state
 };

 //redux store
 //NOTE: redux took pointer to reducer as params
 //so that it can execute the reducer
 const store = redux.createStore(counterReducer);

//Subscriber function which reads the redux store values
 const counterSubscriber = () => {
     const latestState = store.getState();
     console.log(latestState);
 }
 store.subscribe(counterSubscriber);

 //Now dispatch an action (a JS object passed as argument)
 //Based on the type of action, the reducer updates the state
 //Redux automatically calls the subscriber, after state change
store.dispatch({type:'increment'});
store.dispatch({type:'increment'});
store.dispatch({type:'increment'});
store.dispatch({type:'decrement'});