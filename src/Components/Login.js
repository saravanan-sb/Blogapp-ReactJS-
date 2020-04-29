import React from 'react';
import { Link } from 'react-router-dom';
import { loginContext } from '../contexts/loginContext';


class Login extends React.Component {
    static contextType = loginContext;

    state = {
        email: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleLoginSubmit = async (e) => {
        e.preventDefault();
        await this.context.handleLoginSubmit(this.state)
    }


    render() {
        const { state: { invalid, message, isAuthenticated, newBlogMsg } } = this.context;
        if (isAuthenticated) {
            setTimeout(() => {
                this.props.history.push('/blogs')
            }, 2000);
        }
        return (
            <div>
                <div className="container form">
                    <h1>Login</h1>
                    <form className='col s12' onSubmit={this.handleLoginSubmit}>
                        <div className="input-field col s6">
                            <input type="text" id='email' onChange={this.handleChange} />
                            <label htmlFor="last_name">Username</label>
                        </div>
                        <div className="input-field col s12">
                            <input type="password" id='password' onChange={this.handleChange} />
                            <label htmlFor="password">Password</label>
                        </div>
                        <button className="btn waves-effect waves-light blue" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                        </button>
                    </form>
                    <div>
                        <Link to={'/register'} className='black-text newUser'>
                            <p className='newUser'>Do not have an account.? Signup here.!</p>
                        </Link>
                    </div>
                    {
                        invalid ? (<p className='red-text'>Invalid Credentials. Please try again</p>) : null
                    }
                    {
                        message ? (<p className='red-text'>Username not found. Please sign up</p>) : null
                    }
                    {
                        isAuthenticated ? (<p className='green-text'>Successfully logged in. Please wait</p>) : null
                    }
                    {
                        newBlogMsg ? (<p className='red-text'>Please LogIn first.!</p>) : null
                    }

                </div>

            </div>
        );
    }
}
export default Login;
