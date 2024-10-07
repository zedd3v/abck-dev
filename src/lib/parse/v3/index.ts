import { firstDec, secondDec } from './dec';
import parseSensorDetails from './detailed';
import { isBool, isJSON, RawSensorJson } from './utils';

const parseFirstBmSzComp = (sensor: string): number => {
  return Number(sensor.split(';')[4]);
};

export interface ParseResult {
  sensor: string;
  detailed?: {
    [key: string]: string;
  };
}

export function parseSensor(sensor: string, encodeKey: number, detailed: boolean): ParseResult {
  try {
    let rawSensor = sensor.toString();

    const jsonCheck = isJSON(sensor);
    if (!isBool(jsonCheck) && 'sensor_data' in (jsonCheck as RawSensorJson)) {
      rawSensor = (jsonCheck as RawSensorJson).sensor_data;
    }

    const bmSzComps = [parseFirstBmSzComp(rawSensor), encodeKey];

    console.log('\nbmSzComps', bmSzComps);

    const dirty = rawSensor.split(';').slice(7).join(';');

    console.log('\ndirty', dirty);

    const unshuffled = firstDec(dirty, bmSzComps[0]);

    console.log('\nunshuffled', unshuffled);

    const decoded = secondDec(unshuffled, bmSzComps[1]);

    console.log('\ndecoded', decoded);

    const parsedSensor = JSON.stringify(JSON.parse(decoded), null, '\t');

    if (!detailed) {
      return { sensor: parsedSensor };
    }

    return { sensor: parsedSensor, detailed: parseSensorDetails(decoded) };
  } catch (e) {
    console.error(e);
    return { sensor: '' };
  }
}
