import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default (): JSX.Element => {
  const code = `
import Abck from 'abck'; // const Abck = require('abck').default;

function get_cf_date(): number;
function uar(userAgent: string): string;
function sed(): string;
function x2(): number;
function ab(t: string): number;
function ff(a: number): string;
function to(): { d3: number; o9: number };
function jrs(a: number): number[];
function isIgn(fidcnt: number, activeElement: Element, keyCode: number): number;
function getFloatVal(a: number): string;
function x1(): string;
function od(x: string, y: string): string;
function encode(a: string): string;
function get_mn_params_from_abck(abck: string): (string | number)[][];
function mn_get_current_challenges(abck: string): string[];
function mn_s(a: string): number[];
function bdm(a: number[], t: number): nmuber;
function ats(a: number[]): string;
function validateCookie(cookieChecks: string[], abck: string): boolean;
function getmr(): string; // Only works correctly in browser
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
          <SyntaxHighlighter className="w-100" language="bash" style={atomDark}>
            pnpm add abck
          </SyntaxHighlighter>
          <SyntaxHighlighter className="w-100" language="bash" style={atomDark}>
            npm install abck
          </SyntaxHighlighter>
          <SyntaxHighlighter className="w-100 mb-5" language="bash" style={atomDark}>
            yarn add abck
          </SyntaxHighlighter>
          <h3 className="mb-0">Usage</h3>
          <hr />
          <SyntaxHighlighter className="w-100 mb-5" language="javascript" style={atomDark}>
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
