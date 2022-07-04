import React, { useState } from "react";
import { Button } from "./Button";

export const ExampleComponent: React.FC = () => {
  const [count, setCount] = useState(0);
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setCount((prev) => prev + 1);
  };
  // Make any changes here, the pages consuming this component
  // won't refresh, and even after restarting the server, the
  // cached content will be served because technically the
  // markdown document itself did not change
  return (
    <div>
      <p
      // uncomment next line
      /* style={{ fontSize: `18px` } } */
      >
        {count}
      </p>
      <Button onClick={handleClick}>Increment</Button>
    </div>
  );
};
