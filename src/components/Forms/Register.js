import React, {Fragment, useState} from 'react';
import {SignUp} from "../api/api";

const Register = () => {


    const [data, setData] = useState({
        userName: '',
        password: ''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const sendData = async (event) => {
        event.preventDefault()
        const result = await SignUp(data)
    }

    return (
        <Fragment>
            <h1>Formulario</h1>
            <form className="row" onSubmit={sendData}>
                <div className="col-md-3">
                    <input type="text" placeholder="User name" className="form-control" onChange={handleInputChange} name="userName"></input>
                </div>
                <div className="col-md-3">
                    <input type="password" placeholder="Password" className="form-control" onChange={handleInputChange} name="password"></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </Fragment>
    );
}

export default Register;