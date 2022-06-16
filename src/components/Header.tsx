import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = ({ logo }: { logo: string }): JSX.Element => {
  return (
    <Row className="justify-content-center pt-4 mb-3">
      <Col className="text-center d-flex align-items-center justify-content-center">
        <Link className="w-100 btn" to="/">
          New
        </Link>
      </Col>
      <Col className="text-center d-flex align-items-center justify-content-center">
        <Link className="w-100 btn" to="/old">
          Old (TODO/W.I.P)
        </Link>
      </Col>
      <Col className="text-center col-1 d-flex align-items-center justify-content-center">
        <img src={logo} alt="logo" width="32" />
      </Col>
      <Col className="text-center d-flex align-items-center justify-content-center">
        <Link className="w-100 btn" to="/package">
          Package (Outdated)
        </Link>
      </Col>
      <Col className="text-center d-flex align-items-center justify-content-center">
        <Link className="w-100 btn" to="/deob">
          Deobfuscator
        </Link>
      </Col>
    </Row>
  );
};

export default Header;
