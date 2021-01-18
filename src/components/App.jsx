import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Layout from './Layout';
import BadgeNew from '../pages/BadgeNew';
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetails from '../pages/BadgeDetails';
import Badges from '../pages/Badges';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';


function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
                    <Route exact path="/badges/:badgeId/" component={BadgeDetails} />
                    <Route exact path="/home" component={Home} />
                    <Route path="/not-found" component={NotFound} />
                    <Redirect from="*" to="/not-found" />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;