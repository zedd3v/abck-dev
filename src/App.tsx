import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
          <Routes>
            <Route path="/" element={<New />} />
            <Route path="/old" element={<Old />} />
            <Route path="/package" element={<Package />} />
            <Route path="/deob" element={<Deobfuscator />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Container>
    </div>
  );
}
