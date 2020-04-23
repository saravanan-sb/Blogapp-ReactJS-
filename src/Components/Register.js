import React from 'react';
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className="container form">
            <h1>Register</h1>
            <form className='col s12'>
                <div className="input-field col s6">
                    <input type="text" />
                    <label htmlFor="last_name">Username</label>
                </div>
                <div className="input-field col s12">
                    <input type="password" />
                    <label htmlFor="password">Password</label>
                </div>
                <button className="btn waves-effect waves-light blue" type="submit" name="action">Register
                    <i className="material-icons right">send</i>
                </button>
            </form>
            <div>
                <Link to={'/login'} className='black-text'>
                    Already have an account.? Login here.!
                </Link>
            </div>
        </div>
    );
}

export default Register;
