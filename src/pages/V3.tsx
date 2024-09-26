import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import ParseOutput from '../components/ParseOutput';
import CompareSensors from '../components/CompareSensors';
import { ParseSensor, ParsedSensor } from '../functions/parse/v3';

const V3 = (): JSX.Element => {
  const [encodeKey1, setEncodeKey1] = useState<number>(0);
  const [encodeKey2, setEncodeKey2] = useState<number>(0);

  const parseSensorAndOuputResult = (
    sensorIndex: 'firstSensor' | 'secondSensor',
    sensor: string,
    encodeKey: number
  ): void => {
    if (!['firstSensor', 'secondSensor'].includes(sensorIndex)) return;

    // const switchTrue = (document.getElementById('switchTrue') as HTMLInputElement).checked;
    // const switchFalse = (document.getElementById('switchFalse') as HTMLInputElement).checked;

    // const detailed = !!(switchTrue && !switchFalse);
    const detailed = false;

    setSensors({
      ...sensors,
      [sensorIndex]: ParseSensor(sensor, encodeKey, detailed),
    });
  };

  // update sensor on encode key change
  useEffect(() => {
    if (encodeKey1) {
      parseSensorAndOuputResult(
        'firstSensor',
        (document.getElementById('firstSensorTextarea') as HTMLTextAreaElement)?.value,
        encodeKey1
      );
    }
  }, [encodeKey1]);

  useEffect(() => {
    if (encodeKey2) {
      parseSensorAndOuputResult(
        'secondSensor',
        (document.getElementById('secondSensorTextarea') as HTMLTextAreaElement)?.value,
        encodeKey2
      );
    }
  }, [encodeKey2]);

  const [sensors, setSensors] = useState<{
    firstSensor: null | ParsedSensor;
    secondSensor: null | ParsedSensor;
  }>({
    firstSensor: null,
    secondSensor: null,
  });

  // const updateBothSensors = (): void => {
  //   parseSensorAndOuputResult(
  //     'firstSensor',
  //     (document.getElementById('firstSensorTextarea') as HTMLTextAreaElement).value
  //   );
  //   parseSensorAndOuputResult(
  //     'secondSensor',
  //     (document.getElementById('secondSensorTextarea') as HTMLTextAreaElement).value
  //   );
  // };

  return (
    <Row className="align-items-center justify-content-center p-3">
      <Row className="align-items-center justify-content-center w-100 py-4 px-2 light mb-4 rounded">
        <Col className="h-100 text-center justify-content-center align-items-center d-flex flex-column">
          <input
            type="text"
            className="light-input w-100 mb-3 p-2 rounded"
            placeholder="Encode Key"
            onChange={(e): void => setEncodeKey1(Number(e.target.value))}
          />
          <FormControl
            as="textarea"
            rows={6}
            id="firstSensorTextarea"
            placeholder="First Sensor"
            className="light-input"
            onChange={(e): void =>
              parseSensorAndOuputResult('firstSensor', e.target.value, encodeKey1)
            }
          />
        </Col>
        {/* <div className="toggle-switch-container">
          <div className="toggle-switch switch-vertical">
            <input
              id="switchTrue"
              type="radio"
              name="switch"
              onClick={(): void => updateBothSensors()}
              defaultChecked
            />
            <input
              id="switchFalse"
              type="radio"
              name="switch"
              onClick={(): void => updateBothSensors()}
            />
            <span className="toggle-outside">
              <span className="toggle-inside" />
            </span>
          </div>
        </div> */}
        <Col className="h-100 text-center justify-content-center align-items-center d-flex flex-column">
          <input
            type="text"
            className="light-input w-100 mb-3 p-2 rounded"
            placeholder="Encode Key"
            onChange={(e): void => setEncodeKey1(Number(e.target.value))}
          />
          <FormControl
            as="textarea"
            rows={6}
            id="secondSensorTextarea"
            placeholder="Second Sensor"
            className="light-input"
            onChange={(e): void =>
              parseSensorAndOuputResult('secondSensor', e.target.value, encodeKey2)
            }
          />
        </Col>
      </Row>

      {sensors.firstSensor ? (
        <Row className="align-items-center justify-content-center w-100 mb-4 rounded">
          <Col className="h-100 light justify-content-center align-items-center p-4 d-flex flex-column rounded">
            <ParseOutput title="First Sensor Data" elements={sensors.firstSensor} />
          </Col>
        </Row>
      ) : null}

      {sensors.secondSensor ? (
        <Row className="align-items-center justify-content-center w-100 mb-4 rounded">
          <Col className="h-100 light justify-content-center align-items-center p-4 d-flex flex-column rounded">
            <ParseOutput title="Second Sensor Data" elements={sensors.secondSensor} />
          </Col>
        </Row>
      ) : null}

      {sensors.firstSensor && sensors.secondSensor ? (
        <Row className="align-items-center justify-content-center w-100 mb-4 rounded">
          <Col className="h-100 light p-4 rounded">
            <CompareSensors firstSensor={sensors.firstSensor} secondSensor={sensors.secondSensor} />
          </Col>
        </Row>
      ) : null}
    </Row>
  );
};

export default V3;
