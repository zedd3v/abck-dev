import React from 'react';
import { ParsedSensor } from '../functions/parse/v3';

const CompareSensors = ({
  firstSensor,
  secondSensor,
}: {
  firstSensor: ParsedSensor;
  secondSensor: ParsedSensor;
}): JSX.Element => {
  let differences = '';
  Object.keys(firstSensor).forEach((key) => {
    if (firstSensor[key] !== secondSensor[key]) {
      differences += `${key}, `;
    }
  });
  differences = differences.slice(0, -2);
  return (
    <div className="p-3">
      <h2 className="mb-3">Differences</h2>
      <h5>{differences}</h5>
    </div>
  );
};

export default CompareSensors;
