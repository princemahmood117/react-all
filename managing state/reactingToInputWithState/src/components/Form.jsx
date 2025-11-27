import { useState } from "react";

const submitForm = (answer) => {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      if(answer.toLowerCase() === 'dhaka'){
        resolve()
      } else {
        reject(new Error("Wrong answer.Try again"));
      }
    },2000);
  });
}

const Form = () => {
  // visual states :  empty(baad), typing, submitting, success, error(baad)

  // manadatory data state
  const [answer,setAnswer] = useState('')
  const [error,setError] = useState(null)
  const [status,setStatus] = useState('typing') // initially status is set ot 'typing' which enables then input-form for us to type

  if(status === 'success') return <><h1>Thats right!</h1></>

  const handleTextAreaChange = (e) => {
  setError(null)
  setAnswer(e.target.value)  //receives the text from the textarea
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting') // sets status to submitting which disable the textarea and submit-button after we click on "submit"

    try {
      await submitForm(answer)
      setStatus('success')
    } 
    catch (error) {
      setStatus('typing') // re-enables the input form
      setError(error.message)
    }
  }

  
  return (
    <>
      <h2>City quiz</h2>
      <p>What city is located on two continents?</p>

      <form onSubmit={handleSubmit}>
        <textarea
          disabled={status === 'submitting'}
          value={answer}
          onChange={handleTextAreaChange}/>
        <br />

        <button disabled={answer.length == 0 || status === 'submitting'} className="border p-1">Submit</button>

        {status === 'submitting' && <p>Loading....</p>}

        {error && <p className="Error">{error}</p>}
      </form>
    </>
  );
};

export default Form;
