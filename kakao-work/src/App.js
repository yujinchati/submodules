import React from 'react';
import { Route } from 'react-router-dom';
import { Join, Login } from './pages';
import '../src/styles/common.scss';


const App = () => {
    return (
        <>
        <Route exact path="/" component={Join}/>
        <Route path="/login" component={Login}/>
        </>
    );
};

export default App;