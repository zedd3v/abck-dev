import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import { ParsedSensor } from '../functions/parse/old';

export default ({ title, elements }: { title: string; elements: ParsedSensor }): JSX.Element => {
  return (
    <div>
      <h2 className="mb-5 ml-3">{title}</h2>
      <Row className="align-items-center justify-content-center w-100 m-0">
        {Object.keys(elements).map((name) => {
          const value = elements[name];
          const borderColor = value ? 'border-success' : 'border-warning';
          const className = `w-100 mb-4 light-input text-center border ${borderColor}`;
          return (
            <Col className="col-3" key={name}>
              <label className="mt-1" htmlFor={name}>
                {/* CamelCaseToSentenceCase( */ name /* ) */}
              </label>
              <FormControl size="sm" id={name} className={className} value={value} disabled />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
