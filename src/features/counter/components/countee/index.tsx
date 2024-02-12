"use client";

import { decrement, increment } from "../../slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import React from "react";

function Counter() {
  const counterState = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col gap-2 m-auto w-[50%]">
      <h1 className="text-center text-2xl">Counter: {counterState.value}</h1>
      <button
        className="bg-indigo-500 p-4 text-white text-lg"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="bg-indigo-500 p-4 text-white text-lg"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
