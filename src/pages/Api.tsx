import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default (): JSX.Element => {
  return (
    <Row className="align-items-center justify-content-center p-3">
      <Row className="align-items-center justify-content-center w-100 mb-4 rounded">
        <Col className="h-100 light p-4 d-flex flex-column rounded">
          <h1 className="mb-0">API Documentation</h1>
          <hr />
          <h3 className="mb-0">Parse</h3>
          <hr />
          <p className="mb-0">Endpoint</p>
          <SyntaxHighlighter className="w-100 mb-3" language="yaml" style={atomDark}>
            api.abck.dev/v1/parse
          </SyntaxHighlighter>
          <p className="mb-0">Headers</p>
          <SyntaxHighlighter className="w-100 mb-3" language="yaml" style={atomDark}>
            Content-Type: application/json
          </SyntaxHighlighter>
          <p className="mb-0">Body</p>
          <SyntaxHighlighter className="w-100 mb-3" language="yaml" style={atomDark}>
            {`{ "sensor": "7a74G7m23Vrp0c91..."} `}
          </SyntaxHighlighter>
          <p className="mb-0">Response</p>
          <SyntaxHighlighter className="w-100 mb-5" language="yaml" style={atomDark}>
            {`{ "parsed": [ { "key": "string", "value": "string" } ] } `}
          </SyntaxHighlighter>
          <h3 className="mb-0">Compare</h3>
          <hr />
          <p className="mb-0">Endpoint</p>
          <SyntaxHighlighter className="w-100 mb-3" language="yaml" style={atomDark}>
            api.abck.dev/v1/compare
          </SyntaxHighlighter>
          <p className="mb-0">Headers</p>
          <SyntaxHighlighter className="w-100 mb-3" language="yaml" style={atomDark}>
            Content-Type: application/json
          </SyntaxHighlighter>
          <p className="mb-0">Body</p>
          <SyntaxHighlighter className="w-100 mb-3" language="yaml" style={atomDark}>
            {`{ "firstSensor": "7a74G7m23Vrp0c91...", "secondSensor": "7a74G7m23Vrp0c91..." } `}
          </SyntaxHighlighter>
          <p className="mb-0">Response</p>
          <SyntaxHighlighter className="w-100" language="yaml" style={atomDark}>
            {`{ "differences": [ { "key": "string", "firstSensor": "string", "secondSensor": "string" } ] } `}
          </SyntaxHighlighter>
        </Col>
      </Row>
    </Row>
  );
};
