import React, { useState } from "react";

export default function ButtonCount() {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button
        onClick={() => {
          onClick();
        }}
      >
         {count}
      </button>
    </div>
  );
}
