import React from 'react';
import { Link } from 'react-router-dom'
import { loginContext } from '../contexts/loginContext';

class Register extends React.Component {
    static contextType = loginContext;

    state = {
        email: '',
        name: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.context.handleRegisterSubmit(this.state)
    }

    render() {
        const { state: { message, isAuthenticated } } = this.context;
        if (isAuthenticated) {
            setTimeout(() => {
                this.props.history.push('/blogs')
            }, 2000);
        }
        return (
            <div className="container form">
                <h1>Register</h1>
                <form className='col s12' onSubmit={this.handleSubmit}>
                    <div className="input-field col s6">
                        <input type="text" id="email" onChange={this.handleChange} />
                        <label htmlFor="last_name">Email</label>
                    </div>
                    <div className="input-field col s12">
                        <input type="text" id="name" onChange={this.handleChange} />
                        <label htmlFor="name">Username</label>
                    </div>
                    <div className="input-field col s12">
                        <input type="password" id="password" onChange={this.handleChange} />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button className="btn waves-effect waves-light blue" type="submit" name="action">Register
                    <i className="material-icons right">send</i>
                    </button>
                </form>
                {
                    message ? (<p className='red-text'>Username already available. Please login</p>) : null
                }
                {
                    isAuthenticated ? (<p className='green-text'>Successfully registered.Please wait.!</p>) : null
                }
                <div>
                    <Link to={'/login'} className='black-text'>
                        Already have an account.? Login here.!
                </Link>
                </div>
            </div>
        );
    }
}

export default Register;
