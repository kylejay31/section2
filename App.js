import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskManager from './components/TaskManager';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={TaskManager} />
            </Switch>
        </Router>
    );
};

export default App;
