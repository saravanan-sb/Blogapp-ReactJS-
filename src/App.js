import React, { Component } from 'react';
import HomePage from './Components/HomePage';
import { Route, Switch, withRouter } from 'react-router-dom';
import Show from './Components/Show';
import Login from './Components/Login';
import Register from './Components/Register';
import New from './Components/New';
import Navbar from './Components/Navbar';
import { loginContext } from './contexts/loginContext';

class App extends Component {
    static contextType = loginContext;
    render() {
        let renderComp = Login;
        const { token } = this.context.state;
        if (token) {
            renderComp = New;
        }
        return (
            <div className='App'>
                <Navbar />
                <Switch>
                    <Route exact strict path='/blogs' component={HomePage} />
                    <Route exact strict path='/blogs/new' component={renderComp} />
                    <Route path='/blogs/:id' component={Show} />
                    <Route exact strict path='/login' component={Login} />
                    <Route exact strict path='/register' component={Register} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
