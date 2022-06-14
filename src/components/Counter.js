import { useSelector , useDispatch } from 'react-redux';
import { counterActions } from '../store/index';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    // dispatch({ type: 'increment' });
    dispatch(counterActions.increment());

  };

  const decrementHandler = () => {
    // dispatch({ type: 'decrement' });
    dispatch(counterActions.decrement());
  };
  const incrementHandler2X = () => {
    // dispatch({ type: 'increment5X' , amount: 5 });
    dispatch(counterActions.increment5X(5));
  };

  const decrementHandler2X = () => {
    // dispatch({ type: 'decrement2X' , amount: 5 });
    dispatch(counterActions.decrement5X(5));

  };
  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' })
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>-- {counter} --</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={incrementHandler2X}>Increment 5X</button>
        <button onClick={decrementHandler2X}>Decrement 5X</button>
        </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;