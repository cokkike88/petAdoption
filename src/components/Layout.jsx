import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';
import Form from '../components/Form';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const Layout = props => {
    return ( 
        <div className="Layout">            
            <Header />
            <Home />
            <Footer />
            <Form />
            <Login />
            <Dashboard />
        </div>
     );
}
 
export default Layout;