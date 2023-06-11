import React, { useReducer, useState } from "react";

export default function Reducer() {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(myReducer, initialState);

  function myReducer(state, action) {
    switch (action.type) {
      case "reset":
        return initialState;
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        throw new Error("Invalid Action");
    }
  }

  return (
    <div>
      Count(Reducer): {state.count}
      <button onClick={() => dispatch({ type: 'reset'})}>Reset</button>
      <button onClick={() => dispatch({ type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({ type: 'increment'})}>+</button>
    </div>
  );
}
