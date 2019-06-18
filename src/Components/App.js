import React from 'react';
import Navbar from './Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Post from './Post';


const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Route exact path="/" component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/Contact" component={Contact}/>
            <Route path="/posts/:post_id" component={Post}/>
        </BrowserRouter>
    );
};


export default App;
