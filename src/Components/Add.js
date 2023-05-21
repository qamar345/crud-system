import axios from 'axios';
import React from 'react'

export const Add = () => {

    const submit = () => {
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        let values = [name, email, password];

        axios.post("https://crud-system.herokuapp.com/add", values).then((res) => {
            alert("Account Created Successfully");
            window.location.reload();
        }).catch((err) => alert(err));

    }

    return (
        <>

            <div className='container mt-5'>
                
                    <label> Name </label>
                    <input type="text" className='form-control' id='name' placeholder='Enter Name' />
                    <label> Email </label>
                    <input type="email" className='form-control' id='email' placeholder='Enter Email' />
                    <label> Password </label>
                    <input type="password" className='form-control' id='password' placeholder='Enter Password' />
                    <br />
                    <button className='btn btn-primary' onClick={submit}> Submit </button>
            </div>

        </>
    );
}
