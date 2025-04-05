import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment , incrementByAmount , decrementByAmount , incrementAsync } from './state/counter/counterSlice';

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();


  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(incrementByAmount(2))}>Increment by amount</button>
      <button onClick={()=>dispatch(decrementByAmount(2))}>Decrement by amount</button>
      <button onClick={()=>dispatch(incrementAsync(3))}>Increment Async</button>
    </div>
  )
}
