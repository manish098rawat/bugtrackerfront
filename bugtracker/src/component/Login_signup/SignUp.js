import React, { useState } from 'react';
import axios from "axios";

function Signup(){

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[pass,setPass]=useState("");
    const[phone,setPhone]=useState("");
    const collectData=()=>{
        console.log(name,email,pass,phone);
        const admins ={adminName: {name},email: {email},password: {pass},adminContact: {phone}}
        axios.post('http://localhost:8080/admin/add',{admins})
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }

    return(
        <div className="signup">
            <h1>Register</h1>
            <input className="input" type="text" placeholder="Enter Name"
            value={name} onChange={(e)=>setName(e.target.value)}/>
            <input className="input" type="text" placeholder="Enter Email"
            value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input className="input" type="text" placeholder="Enter Phone No."
            value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            <input className="input" type="text" placeholder="Enter Password"
            value={pass} onChange={(e)=>setPass(e.target.value)}/>
            <button onClick={collectData} className="btn" type="button">Signup</button>
        </div>
    )
}
export default Signup;