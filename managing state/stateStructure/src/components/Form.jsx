import { useState } from "react";

const Form = () => {

    const [inputs,setInputs] = useState([
        {
        id : 1,
        label : 'input'
    },
])

const handleAddInput = () => {
    const nextId = inputs[inputs.length - 1].id + 1;
    console.log(nextId);
   
    setInputs([
        ...inputs,
        {
            id : nextId,
            label : 'input'
        }
    ])
}
    return (
        <div>

            {/* <div style={{marginTop : '20px'}}>
                <input type="text" />
            </div> */}

          {inputs.map((input)=> (
            <div key={input.id} style={{marginTop : '10px',border : "1px solid black",  width : '170px'}}>
                <input type="text" label={input.label} />
            </div>
          ))}

            <div style={{marginTop : '20px', width : '80px', textAlign : 'center' ,border : "1px solid black"}}>
                <button onClick={handleAddInput}>Add input</button>
            </div>
        </div>
    );
};

export default Form;