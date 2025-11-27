import { useState } from "react";

const Pointer = () => {

    // creating 2 different states for 2 axis
    // const [x,setX] = useState(0)
    // const [y,setY] = useState(0)


    // a single state manageing both x and y axis (better for grouping)
    const [position,setPosition] = useState({
        x : 0,
        y : 0,
    })

    const handlePointerMove = (e) => {
        e.preventDefault()

        // setX(e.clientX)
        // setY(e.clientY)

        setPosition({
            x : e.clientX,
            y : e.clientY,
        })

    }

    return (
        <div onPointerMove={handlePointerMove} style={{
            position : 'relative',
            width : '100vw',
            height : '100vh',
        }}>
            <div style={{
                position : 'absolute',
                backgroundColor : 'red',
                borderRadius : '50%',
                opacity : '70%',
                // left : -10,
                // top : -10,
                width : 40,
                height : 40,
                // transform : `translate(${x}px, ${y}px)`
                transform : `translate(${position.x}px, ${position.y}px)`
            }}></div>
            
        </div>
    );
};

export default Pointer;