import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Old from './pages/Old';
import New from './pages/New';
import Package from './pages/Package';
import Deobfuscator from './pages/Deobfuscator';
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
              <New />
            </Route>
            <Route path="/old">
              <Old />
            </Route>
            <Route path="/package">
              <Package />
            </Route>
            <Route path="/deob">
              <Deobfuscator />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </Container>
    </div>
  );
}
