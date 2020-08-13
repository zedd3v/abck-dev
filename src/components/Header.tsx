import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default ({ logo }: { logo: string }): JSX.Element => {
  return (
    <Row className="justify-content-center pt-4 mb-3">
      <Col className="text-center d-flex align-items-center justify-content-center">
        <Link className="w-100 btn" to="/">
          Parser
        </Link>
      </Col>
      <Col className="text-center d-flex align-items-center justify-content-center">
        <Link className="w-100 btn" to="/api">
          Api
        </Link>
      </Col>
      <Col className="text-center col-1 d-flex align-items-center justify-content-center">
        <img src={logo} alt="logo" width="32" />
      </Col>
      <Col className="text-center d-flex align-items-center justify-content-center">
        <Link className="w-100 btn" to="/package">
          Package
        </Link>
      </Col>
      <Col className="text-center d-flex align-items-center justify-content-center">
        <Button href="https://lelinhtinh.github.io/de4js/" target="_blank" className="w-100">
          Deobfuscator
        </Button>
      </Col>
    </Row>
  );
};
