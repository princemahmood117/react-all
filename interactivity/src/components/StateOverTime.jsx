// import { useState } from "react";

// export default function StateOverTime() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{number}</h1>


//       <button onClick={() => {
//         setNumber(number + 5);
//         setTimeout(()=> alert(number), 2000)  // snapshot is taken immediately the component is rendered
//       }}>+5
//       </button>
//     </>
//   )
// }


// import { useState } from 'react';

// export default function StateOverTime() {

//   const [to, setTo] = useState('Alice');
//   const [message, setMessage] = useState('Hello');

//   function handleSubmit(e) {
//     e.preventDefault();

//     setTimeout(() => {
//       alert(`You said ${message} to ${to}`);
//     }, 5000);
//   }

//   return (
//     <form onSubmit={handleSubmit} className='ml-10'>
//       <label>
//         To:
//         <select
//           value={to}
//           onChange={e => setTo(e.target.value)}>
//           <option value="Alice">Alice</option>
//           <option value="Bob">Bob</option>
//         </select>
//       </label>
//       <br /> <br />
//       <textarea
//         value={message}
//         onChange={e => setMessage(e.target.value)}
//       /> <br /> <br />
//       <button type="submit">Send</button>
//     </form>
//   );
// }

