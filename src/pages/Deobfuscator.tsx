import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import Deobfuscate from '../functions/deob';

const download = (text: string) => {
  const element = document.createElement('a');
  element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`);
  element.setAttribute('download', 'abck_dev.js');
  element.style.display = 'none';

  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

const Deobfuscator = (): JSX.Element => {
  const [deobbedScript, setDeobbedScript] = useState('');

  const deobfuscateScriptAndOuputResult = (script: string) => {
    try {
      const deobbed = Deobfuscate(script);

      download(deobbed);

      setDeobbedScript(deobbed);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
      // eslint-disable-next-line no-alert
      alert('An error occured. (more info in the console)');
    }
  };

  return (
    <Row className="align-items-center justify-content-center p-3">
      <Row className="align-items-center justify-content-center w-100 py-4 px-2 light mb-4 rounded">
        <Col className="h-100 text-center justify-content-center align-items-center d-flex flex-column">
          <FormControl
            as="textarea"
            rows={12}
            id="scriptTextarea"
            placeholder="Obfuscated Akamai V2 Script"
            className="light-input"
            onChange={(e): void => deobfuscateScriptAndOuputResult(e.target.value)}
          />
        </Col>
      </Row>

      {deobbedScript !== '' ? (
        <Row className="align-items-center justify-content-center w-100 mb-4 rounded">
          <Col className="h-100 light p-4 d-flex flex-column rounded">
            <h3 className="mb-0">Deobfuscated Script</h3>
            <hr />
            <FormControl
              as="textarea"
              rows={24}
              id="deobfuscatedScriptTextarea"
              className="light-input"
              readOnly
              value={deobbedScript}
            />
          </Col>
        </Row>
      ) : null}
    </Row>
  );
};

export default Deobfuscator;
