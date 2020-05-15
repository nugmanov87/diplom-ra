import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header.js';
import Banner from './components/Banner.js';
import Footer from './components/Footer.js';
import PageHome from './components/PageHome.js';
import PageCatalog from './components/PageCatalog.js';
import PageAbout from './components/PageAbout.js';
import PageContacts from './components/PageContacts.js';
import Page404 from './components/Page404.js';
import PageProduct from './components/PageProduct.js';
import PageCart from './components/PageCart.js';
// eslint-disable-next-line
import regeneratorRuntime from "regenerator-runtime";
import './App.css';

require.context('./img');

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <main className="container">
          <div className="row">
            <div className="col">
              <Banner />
              <Switch>
                <Route exact path={'/catalog/:id'} component={PageProduct} />
                <Route exact path={'/catalog'} component={PageCatalog} />
                <Route exact path={'/about'} component={PageAbout} />
                <Route exact path={'/contacts'} component={PageContacts} />
                <Route exact path={'/cart'} component={PageCart} />
                <Route exact path={'/'} component={PageHome} />
                <Route path="*" component={Page404} />
              </Switch>
            </div>
          </div>
        </main>
        <Footer />
      </Router>
    </React.Fragment>
  );
}
