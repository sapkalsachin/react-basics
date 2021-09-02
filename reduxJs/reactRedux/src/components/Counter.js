//for classbased component
import { Component } from "react";

//useSelector provides subscribe functionality
//useDispatch provides dispatch functionality for the actions
import { useSelector, useDispatch, connect } from "react-redux";
import classes from "./Counter.module.css";

import {counterActions} from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);
  const state = useSelector(state => state);

  console.log(state);
  const toggleCounterHandler = () => {
    console.log('clicked')
    // dispatch({type:'toggle'})
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandler = () => {
    // dispatch({ type: "increment" });
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    // dispatch({ type: "increase", amount: 5 });
    dispatch(counterActions.increase(10)); //We can pass object as well. Toolkit by default takes it in payload key
  };

  const decrementHandler = () => {
    // dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler} className={classes.counterButton}>
          decrement
        </button>
        <button onClick={incrementHandler} className={classes.counterButton}>
          increment
        </button>

        <button onClick={increaseHandler} className={classes.counterButton}>
          increase
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

/* FOR CLASS BASED COMPONENT

//Class based component

class Counterr extends Component {
  incrementHandler() {
    this.props.increment();
  }
  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {
    console.log(this);
  }

  render() {
    return (<main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{this.props.counter}</div>
      <div>
        <button
          onClick={this.decrementHandler.bind(this)}
          className={classes.counterButton}
        >
          decrement
        </button>
        <button
          onClick={this.incrementHandler.bind(this)}
          className={classes.counterButton}
        >
          increment
        </button>
      </div>
      <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
    </main>)
  }
}


//Maps state to props, executed by redux
//Need to pass this to connect
const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

//Dispatch functon for classbased component
//executed by redux, need to be passed with valid action object
const mapDispatchToProps = dispatch =>{
  return(
    {
      increment: ()=>dispatch({type: 'increment'}),
      decrement: ()=>dispatch({type: 'decrement'}),
    }
  );
}



//For Class based component
export  connect(mapStateToProps, mapDispatchToProps)(Counterr);
*/
