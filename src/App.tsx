import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import V2 from './pages/V2';
import V3 from './pages/V3';
import Footer from './components/Footer';
import logo from './logo.png';
import './App.css';

export default function App(): JSX.Element {
  return (
    <div className="h-100">
      <Container fluid className="h-100">
        <BrowserRouter>
          <Header logo={logo} />
          <Routes>
            <Route path="/" element={<V2 />} />
            <Route path="/v3" element={<V3 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Container>
    </div>
  );
}
