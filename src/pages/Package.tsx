import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default (): JSX.Element => {
  const code = `
const Abck = require('abck').default; // import Abck from 'abck';

Abck.validateCookie(['=='], "C0E79E904291F0101B699F08B90AE09C~-1~YAAQvnEGF1n4o7ByAQAASRpJwAQ+zePjLXV6UyhVffBSzV8Rjd2nU3orgVbMnYvAao6Xgw8Feycm9b55c0HQgOWFePtq2y1Cc/f+FhPcJQYsSgeFZz1Rs/pBhI6Db/aCcjJd9WFJxZ5G+LOsuFezyoJDmY2FK4BAfTYKQ1oPqKN36Rjmqm6b+KMn8wq2/4rukChJhuFD4b/UDEcqCAdMguRAlosZrDg5y1GTsiMnjOPzxSJLoqsPT9tVf2tjVJw94fLQcyNrYYSPDvliWmI4WDzg6zRpkjBjfmsiXnwtApPKDSoahrM3ykGSOdHAwJGuInCZcrDayC7VwXlPPYYAzO9nVP95qnaVAA==~-1~-1~-1");
// => true

const d3 = Abck.d3();

Abck.gd(Date.now(), d3, "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36", {
  availWidth: 1680,
  availHeight: 972,
  width: 1680,
  height: 1050,
  innerWidth: 1680,
  innerHeight: 939,
  outerWidth: 1680,
});
// => Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36,uaend,12147,0030107,en-US,Gecko,3,0,0,0,391828,9560794,1680,972,1680,1050,1680,939,1680,,cpen:0,i1:0,dm:0,cwen:0,non:1,opc:0,fc:0,sc:0,wrc:1,isc:0,vib:1,bat:1,x11:0,x12:1,8276,0.744979299372,796244780392,loc:

Abck.o9(d3);
// => 914527596

Abck.sed();
// => "0,0,0,0,1,0,0"

Abck.ab("test");
// => 448

Abck.np();
// => "10321144241322243122"

Abck.getmr(); //Needs to be executed inside an electron window
// => "58,60,289,59,113,56,26,21,25,9,9,9,20,588,"

Abck.od("0a46G5m17Vrp4o4c", "afSbep8yjnZUjq3aL010jO15Sawj2VZfdYK8uY90uxq");
// => "7a74G7m23Vrp0o5c"
  `;
  return (
    <Row className="align-items-center justify-content-center p-3">
      <Row className="align-items-center justify-content-center w-100 mb-4 rounded">
        <Col className="h-100 light p-4 d-flex flex-column rounded">
          <h1 className="mb-0">Abck</h1>
          <hr />
          <p className="mb-5">Abck is a library that makes generating akamai cookies easier.</p>
          <h3 className="mb-0">Installation</h3>
          <hr />
          <SyntaxHighlighter className="w-100" language="bash" style={vscDarkPlus}>
            npm install abck
          </SyntaxHighlighter>
          <SyntaxHighlighter className="w-100 mb-5" language="bash" style={vscDarkPlus}>
            yarn add abck
          </SyntaxHighlighter>
          <h3 className="mb-0">Usage</h3>
          <hr />
          <SyntaxHighlighter className="w-100 mb-5" language="javascript" style={vscDarkPlus}>
            {code}
          </SyntaxHighlighter>
          <h3 className="mb-0">Contributing</h3>
          <hr />
          <p className="mb-5">
            Pull requests are welcome. For major changes, please open an issue first to discuss what
            you would like to change.
          </p>
          <h3 className="mb-0">License</h3>
          <hr />
          <p>MIT</p>
        </Col>
      </Row>
    </Row>
  );
};
