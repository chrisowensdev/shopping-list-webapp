import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import SignUp from './pages/SignUp';

const App = () => {
    return (
        <>
            <Router>
                <div className='App'>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/signup' component={SignUp} />
                    </Switch>
                </div>
            </Router>
        </>
    );
};

export default App;
