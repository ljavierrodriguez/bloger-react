import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Index from './views';
import Login from './views/login';
import SignUp from './views/signup';
import NotFound from './views/notfound';
import Navbar from './components/navbar';
import Footer from './components/footer';
import injectContext from './store/appContext';

const Layouts = props => {
    return (
        <>
            <BrowserRouter>
                <div className="wrapper">
                    <Navbar />
                    <Switch>
                        {/* <Route exact path="/" component={Index} /> */}
                        <Route exact path="/signup" component={props => <SignUp {...props} />} />
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <Route exact path="/" component={Index} />
                        <Route component={NotFound} />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        </>
    )
}

export default injectContext(Layouts);