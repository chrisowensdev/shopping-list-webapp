import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import TopMenu from './components/menu/TopMenu';
import BottomMenu from './components/menu/BottomMenu';

const App = () => {
    return (
        <>
            <Router>
                <div className='App'>
                    <TopMenu />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/signup' component={SignUp} />
                    </Switch>
                    <BottomMenu />
                </div>
            </Router>
        </>
    );
};

export default App;
