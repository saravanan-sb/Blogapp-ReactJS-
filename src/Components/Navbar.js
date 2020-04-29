import React from 'react';
import { NavLink } from 'react-router-dom';
import { loginContext } from '../contexts/loginContext';

class Navbar extends React.Component {
    static contextType = loginContext
    render() {
        const { handleLogout, newBlogMsg } = this.context;
        const { token, email } = this.context.state;

        const navbar = token ? (
            <nav className="nav-wrapper transparent ">
                <div className="container">
                    <NavLink to={'/blogs'} className="brand-logo black-text">
                        Median
                </NavLink>
                    <a href='true' className="sidenav-trigger data" data-target="mobile-menu">
                        <i className="material-icons black-text">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <p className='black-text nav-name'>Hello, {email}</p>
                        </li>
                        <li>
                            <NavLink to={'/blogs/new'} className='black-text'>
                                New Blog
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to={'/blogs'} className='black-text' onClick={handleLogout}>
                                Logout
                        </NavLink>
                        </li>

                    </ul>
                    <ul className="sidenav" id='mobile-menu'>
                        <li><div className="user-view">
                            <p><span className="black-text email">Hello, {email}</span></p>
                        </div></li>
                        <li>
                            <NavLink to={'/blogs/new'} className='black-text waves-effect'>
                                New Blog
                        </NavLink>
                        </li>
                        <li><div className="divider" /></li>
                        <li>
                            <NavLink to={'/blogs'} className='black-text'>
                                Home
                        </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/login'} className='black-text' onClick={handleLogout}>
                                Logout
                        </NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
        ) : (
                <nav className="nav-wrapper transparent ">
                    <div className="container">
                        <NavLink to={'/blogs'} className="brand-logo black-text">
                            Median
                </NavLink>
                        <a href='true' className="sidenav-trigger data" data-target="mobile-menu">
                            <i className="material-icons black-text">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <NavLink to={'/blogs/new'} className='black-text' onClick={newBlogMsg}>
                                    New Blog
                    </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/login'} className='black-text' onClick={newBlogMsg}>
                                    Login
                        </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/register'} className='black-text'>
                                    SignUp
                        </NavLink>
                            </li>
                        </ul>
                        <ul className="sidenav" id='mobile-menu'>
                            <li><div className="user-view">
                                <a href="#email"><span className="black-text email">Hello there.!</span></a>
                            </div></li>
                            <li><NavLink to={'/blogs/new'} className='black-text waves-effect' onClick={newBlogMsg}>
                                New Blog
                </NavLink></li>
                            <li><div className="divider" /></li>
                            <li>
                                <NavLink to={'/blogs'} className='black-text'>
                                    Home
                        </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/login'} className='black-text' onClick={newBlogMsg}>
                                    Login
                        </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/register'} className='black-text'>
                                    Signup
                        </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            )
        return (
            <div>
                {navbar}
            </div>
        );
    }
}

export default Navbar;
