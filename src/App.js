import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import { getBlogs } from './api';
import HomePage from './Components/HomePage';
import { BrowserRouter, Route } from 'react-router-dom';
import Show from './Components/Show';
import Login from './Components/Login';
import Register from './Components/Register';

class App extends Component {
    state = {
        blogs: []
    }

    async componentDidMount() {
        const { data: { blogs } } = await getBlogs();
        this.setState({
            blogs
        })
    }

    render() {
        const blogs = this.state.blogs;
        return (
            <BrowserRouter>
                <div className='overall'>
                    <Navbar />
                    <Route exact path='/blogs' render={() => <HomePage blogs={blogs} />} />
                    <Route path='/blogs/:id' component={Show} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
