import { useState } from "react";
export default function SignupForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const updateFirstName = (evt) => {
        setFirstName(evt.target.value);
    }
    const updateLastName = (evt) => {
        setLastName(evt.target.value);
    }
    const handleSubmit = () => {
        console.log(firstName,lastName)
    }
    return (
        <div>
            <label htmlFor="firstname">First Name</label>
            <input type="text" name="" id="firstname" placeholder="firstname" value={firstName} onChange={updateFirstName} />
            <label htmlFor="lastname">last Name</label>
            <input type="text" name="" id="lastname" placeholder="lastname" value={ lastName} onChange={updateLastName}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}