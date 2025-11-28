import React, { useState } from "react";
import FancyCounter from "./FancyCounter";

const Subtree = () => {
  const [isFancy, setIsFancy] = useState(false);
  
//   div and section ar both different, so the counter gets reset while replacing div with section
  return (
    <div>
      {isFancy ? (
        <div>
          <FancyCounter isFancy={true} />
        </div>
      ) : (
        <section>
          <FancyCounter isFancy={false} />
        </section>
      )}
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={(e) => {
            setIsFancy(e.target.checked);
          }}
        />
        Use fancy styling
      </label>
    </div>
  );
};

export default Subtree;
