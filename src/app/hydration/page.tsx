"use client";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="p-3">
      <h1 className="font-semibold">
        Counter should not work after JS is disabled
      </h1>
      <div className="flex flex-col gap-4  items-center mt-3">
        <span className="text-4xl font-bold">{counter}</span>
        <button
          type="button"
          className="bg-blue-500 p-1 rounded-sm "
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Increase counter
        </button>
      </div>
    </div>
  );
}
