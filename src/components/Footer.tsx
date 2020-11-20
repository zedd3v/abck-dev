import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default (): JSX.Element => {
  return (
    <Row className="justify-content-center footer">
      <Col className="text-center d-flex align-items-center justify-content-center flex-column">
        <h6>
          Current Akamai Version: 1.66 | Made by&nbsp;
          <a href="https://github.com/zedd3v" rel="noopener noreferrer" target="_blank">
            github.com/zedd3v
          </a>
        </h6>
      </Col>
    </Row>
  );
};
