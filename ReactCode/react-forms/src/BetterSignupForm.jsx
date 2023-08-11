import { useState } from "react";
export default function BetterSignupForm() {
    const [formData,setFormData] = useState({firstName: "", lastName: "",password:""});
    const handleChange = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value;
        setFormData(currData => {
            return {
                ...currData, 
                [changedField]: newValue
            }
        })
    }

    const handleSubmit = () => {
        console.log(formData)
    }
    return (
        <div>
            <label htmlFor="firstname">First Name</label>
            <input type="text" name="firstName" id="firstname" placeholder="firstname" value={formData.firstName} onChange={handleChange} />
            <label htmlFor="lastname">last Name</label>
            <input type="text" name="lastName" id="lastname" placeholder="lastname" value={formData.lastName} onChange={handleChange}/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="password" value={formData.password} onChange={handleChange}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}