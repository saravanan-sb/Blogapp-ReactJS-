import React, { Component, createContext } from 'react';
import { userLogin, newUser, userDetails } from '../api';

export const loginContext = createContext();

class LoginContextProvider extends Component {
    state = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        invalid: null,
        message: null,
        newBlogMsg: false,
        redirect: null,
        email: JSON.parse(localStorage.getItem('userData'))
    }


    handleLoginSubmit = async (user) => {
        const { data, status } = await userLogin(user);
        console.log(data.err)
        if (data.err === 'IVC') {
            this.setState({ invalid: true, isAuthenticated: false })

        } else {
            if (status === 200) {
                localStorage.setItem('token', JSON.stringify(data.token))
                const { data: { email } } = await userDetails();
                localStorage.setItem('userData', JSON.stringify(email))

                this.setState({
                    token: data.token,
                    isAuthenticated: true,
                    message: false,
                    redirect: '/blogs',
                    email: email
                })
            } else {

                this.setState({
                    message: true
                })

            }
        }

    }

    handleRegisterSubmit = async (user) => {
        const { data, status } = await newUser(user);
        if (data && status === 200) {
            localStorage.setItem('token', JSON.stringify(data.token))
            const { data: { email } } = await userDetails();
            localStorage.setItem('userData', JSON.stringify(email))

            this.setState({
                token: data.token,
                isAuthenticated: true,
                message: false,
                redirect: '/blogs',
                email: email
            })
        } else {
            this.setState({
                message: true
            })
        }
    }

    handleLogout = async () => {
        localStorage.removeItem('token')
        localStorage.removeItem('userData')
        this.setState({
            token: null,
            isAuthenticated: null,
            invalid: null,
            message: null,
            redirect: '/blogs',
            email: null
        })
    }

    newBlogMsg = async () => {
        this.setState({
            newBlogMsg: !this.state.newBlogMsg
        })
    }

    render() {
        return (
            <loginContext.Provider value={{ state: this.state, handleLoginSubmit: this.handleLoginSubmit, handleRegisterSubmit: this.handleRegisterSubmit, handleLogout: this.handleLogout, newBlogMsg: this.newBlogMsg }}>
                {this.props.children}
            </loginContext.Provider>
        );
    }
}

export default LoginContextProvider;
