import React from 'react';

const Navbar = () => {
    return (
        <nav className="nav-wrapper transparent ">
            <div className="container">
                <a href="#true" className="brand-logo black-text">BlogApp</a>
                <a href='true' className="sidenav-trigger data" data-target="mobile-menu">
                    <i className="material-icons black-text">menu</i>
                </a>
                <ul className="right hide-on-med-and-down">
                    <li><a className='black-text' href="#services">New Blog</a></li>
                    <li><a className='black-text' href="#photos">Login</a></li>
                    <li><a className='black-text' href="#services">Signup</a></li>
                </ul>
                <ul className="sidenav" id='mobile-menu'>
                    <li><div className="user-view">

                        <a href="#name"><span className="black-text name">John Doe</span></a>
                        <a href="#email"><span className="black-text email">jdandturk@gmail.com</span></a>
                    </div></li>
                    <li><a className="waves-effect" href="#!">New Blog</a></li>
                    <li><div className="divider" /></li>
                    <li><a href='true'>Login</a></li>
                    <li><a href="#!">Sign up</a></li>
                </ul>
            </div>
        </nav>

    );
}

export default Navbar;
