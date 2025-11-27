import { useState } from "react";

const StateSnapshot = () => {

    const [num,setNum] = useState(0)

    const handleInc = () => {
         setNum( num + 1)
    }


    return (
        <div>
            <h1>{num}</h1>

            <button onClick={handleInc}>+</button>
            
            <button onClick={()=> setNum(num - 1)}> - </button>
        </div>
    );
};

export default StateSnapshot;