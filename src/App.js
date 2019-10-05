// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React from 'react';
import './App.css';
import {
  Route, Switch, HashRouter
} from 'react-router-dom';
import '@gooddata/react-components/styles/css/main.css';

import { MainPage } from './pages/MainPage';

const App = () => {
    return (
        <div className="App">
            <HashRouter>
                <>
                <Switch>
                    <Route
                    path="/"
                    render={props => <MainPage {...props} />}
                    exact
                    />
                </Switch>
                </>
            </HashRouter>
        </div>
    );
}

export default App;
