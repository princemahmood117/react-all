import { useState } from "react";
import Counter from "./Counter";

const Different = () => {
    
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div>
    {/* counter is removed from the render tree and replaces with <p> tag when condition is met*/}

      {isPaused ? <p>See you later!</p> : <Counter />}  

      <label>
        <input
          type="checkbox"
          checked={isPaused}
          onChange={(e) => {
            setIsPaused(e.target.checked);  // clicking this makes the checked = true;
          }}
        />
        Take a break
      </label>
    </div>
  );
};

export default Different;

