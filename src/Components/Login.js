import React from 'react';

const Login = () => {
    return (
        <div className="container form">
            <h1>Login</h1>
            <form className='col s12'>
                <div className="input-field col s6">
                    <input type="text" />
                    <label htmlFor="last_name">Username</label>
                </div>
                <div className="input-field col s12">
                    <input type="password" />
                    <label htmlFor="password">Password</label>
                </div>
                <button className="btn waves-effect waves-light blue" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                </button>
            </form>
        </div>
    );
}

export default Login;
