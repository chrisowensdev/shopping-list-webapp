import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import SignUp from './pages/SignUp';
import TopMenu from './components/menu/TopMenu';
import BottomMenu from './components/menu/BottomMenu';

import ListScreen from './pages/ListScreen';
import SearchScreen from './pages/SearchScreen';
import AccountScreen from './pages/AccountScreen';

const App = () => {
    const [screen, setScreen] = useState('list');

    return (
        <>
            <Router>
                <div className='App'>
                    <TopMenu />
                    <Switch>
                        <Route exact path='/'>
                            {screen === 'list' && <ListScreen />}
                            {screen === 'search' && <SearchScreen />}
                            {screen === 'account' && <AccountScreen />}
                        </Route>
                        <Route exact path='/signup' component={SignUp} />
                    </Switch>
                    <BottomMenu setScreen={setScreen} />
                </div>
            </Router>
        </>
    );
};

export default App;
