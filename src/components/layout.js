import React from 'react';

//third-party

import {Switch,Route} from 'react-router-dom';

//components

import MainHeader from './navbar/mainnav';
import Header from './navbar/nav';
import Footer from './footer/footer';

//pages

import Home from './pages/home';
import FarmersProducts from './pages/farmers/products';
import Products from './pages/products';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import Logout from './pages/auth/logout';
import Dashboard from './pages/dashboard';
import UploadProduct from './pages/product-upload';
import About from './pages/about/About';

const Layout = () => {
    return (
        <section className="layout">
            <div className="app-header">
                <MainHeader />
                <Header />
            </div>
            <div className="app-body">
                <Switch>
                    
                    <Route exact path="/" component={Home} />
                    <Route exact path='/farmers/:product' component={FarmersProducts} />
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/auth/signin" component={Login} />
                    <Route exact path="/auth/signup" component={Signup} />
                    <Route exact path="/auth/logout" component={Logout} />
                    <Route exact path="/account/dashboard" component={Dashboard} />
                    <Route exact path="/account/product-upload" component={UploadProduct} />
                    <Route exact path="/aboutus" component={About} />

                </Switch>
            </div>
            <div className="app-footer">
                <Footer />
            </div>
        </section>
    )
};

export default Layout;