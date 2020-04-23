import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper transparent ">
            <div className="container">
                <Link to={'/blogs'} className="brand-logo black-text">
                    Median
                </Link>
                <a href='true' className="sidenav-trigger data" data-target="mobile-menu">
                    <i className="material-icons black-text">menu</i>
                </a>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <Link to={'/login'} className='black-text'>
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to={'/register'} className='black-text'>
                            Signup
                        </Link>
                    </li>
                </ul>
                <ul className="sidenav" id='mobile-menu'>
                    <li><div className="user-view">

                        <a href="#name"><span className="black-text name">John Doe</span></a>
                        <a href="#email"><span className="black-text email">jdandturk@gmail.com</span></a>
                    </div></li>
                    <li><a className="waves-effect" href="#!">New Blog</a></li>
                    <li><div className="divider" /></li>
                    <li>
                        <Link to={'/login'} className='black-text'>
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to={'/register'} className='black-text'>
                            Signup
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default Navbar;
