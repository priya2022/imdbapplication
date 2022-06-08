import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Home from './component/Home/Home'
import Details from './component/Details/DetailDisplay'

import { BrowserRouter,Route } from 'react-router-dom';

const Router = ()=> {
    return(
        <BrowserRouter>
        <Header/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/details/:movId' component={Details}/>
        <Footer/>
        </BrowserRouter>
    )
}
export default Router;