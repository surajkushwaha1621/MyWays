import { useState } from "react";
 export default function Form(){

    //States for Registartion
    const [name,setName]=useState('');
    const [email, setEmail]=useState('');
    const [phone, setPhone]=useState('');

    // States for checking Error
    const [submitted, setSubmitted]=useState(false);
    const [error,setError]=useState(false);

    // Handling name change
    const handleName = (e)=>{
        setName(e.target.value);
        setSubmitted(false);
    };

    // Handling email change
    const handleEmail = (e)=>{
        setEmail(e.target.value);
        setSubmitted(false);
    };

    //Handling phone number chnage
    const handlePhone = (e)=>{
        setPhone(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if(name==='' || email === '' || phone === ''){
            setError(true);
        }
        else{
            setSubmitted(true);
            setError(false);
        }
    }
    
    // showing success message
    const successMessage = () =>{
        return (
            <div
            className="success"
            style={{
                display:submitted? '' : 'none',
            }}>
                <h1>User {name} successfully registered !!</h1>
            </div>
        );
    };

    // showing error msg if error is true
    const errorMessage = () => {
        return (
            <div
            className="error"
            style={{
                display: error? '' : 'none',
            }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };

    return (
        <div className="from">
        <div>
            <h1>User Registartion</h1>
        </div>

        {/* alling the methods */}
        <div className="messages">
            {errorMessage()}
            {successMessage()}
        </div>

        <form >
            <label className="label">Name</label>
            <input onChange={handleName} className="input" 
            value={name} type="text"/>

            <label className="label">Email</label>
            <input onChange={handleEmail} className="input" 
            value={email} type="email"/>

            <label className="label">Phone</label>
            <input onChange={handlePhone} className="input" 
            value={phone} type="text"/>
            
            <button onClick={handleSubmit} className="btn" type="submit">
                Submit
                </button>
        </form>

        </div>
    )

 }