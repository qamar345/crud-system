import axios from 'axios';
import React from 'react'

export const Login = () => {


    const submit = () => {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        let values = [email, password];

        axios.post("https://crud-system-node.herokuapp.com/login", values).then((res) => {
            alert("Login Successfully");
            window.location.reload()
        }).catch((err) => {
            alert(err);
        })

    }

    return (
        <div className='container mt-5'>
            {/* <form> */}
            <label> Email </label>
            <input type="email" className='form-control' id='email' placeholder='Enter Email' />
            <label> Password </label>
            <input type="password" className='form-control' id='password' placeholder='Enter Password' />
            <br />
            <button className='btn btn-primary' onClick={submit}> Submit </button>
            {/* </form> */}
        </div>
    )
}
