import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Parser from './pages/Parser';
import Api from './pages/Api';
import Package from './pages/Package';
import Footer from './components/Footer';
import logo from './logo.png';
import './App.css';

export default function App(): JSX.Element {
  return (
    <div className="h-100">
      <Container fluid className="h-100">
        <BrowserRouter>
          <Header logo={logo} />
          <Switch>
            <Route exact path="/">
              <Parser />
            </Route>
            <Route path="/api">
              <Api />
            </Route>
            <Route path="/package">
              <Package />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </Container>
    </div>
  );
}
