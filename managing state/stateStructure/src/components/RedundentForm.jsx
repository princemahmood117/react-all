import { useState } from "react";

export default function RedundentForm() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
//   const [fullName, setFullName] = useState("");  // redundent state is removed

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
    // setFullName(e.target.value + " " + lastName);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
    // setFullName(firstName + " " + e.target.value);
  }

  
  //   derived state
  const fullName = firstName + ' ' + lastName;

  return (
    <>
      <h2 className="my-2">Let’s check you in</h2>
      <div className="flex flex-col gap-3">
        <label>
          First name:
          <input
            className="border ml-[0.99px]"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </label>
        <label>
          Last name: 
          <input
            className="border ml-1"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </label>
      </div>
      <p className="my-2">
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}
