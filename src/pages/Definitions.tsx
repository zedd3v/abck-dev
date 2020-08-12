import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default (): JSX.Element => (
  <Row className="align-items-center justify-content-center p-3">
    <Col className="h-100 text-center light justify-content-center align-items-center p-5 d-flex flex-column">
      <p>
        need help and contributions...&nbsp;
        <a href="https://github.com/zedd3v/abck-dev" target="_blank" rel="noopener noreferrer">
          https://github.com/zedd3v/abck-dev
        </a>
      </p>
    </Col>
  </Row>
);
