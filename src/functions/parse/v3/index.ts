import { isJSON, isBool, RawSensorJson } from './utils';
import { secondDec, firstDec } from './dec';

const parseFirstBmSzComp = (sensor: string): number => {
  return Number(sensor.split(';')[4]);
};

export function ParseSensor(sensor: string, encodeKey: number, detailed: boolean): string | null {
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

    return JSON.stringify(JSON.parse(decoded), null, '\t');
  } catch (e) {
    return (
      console.error(e),
      alert('An error occured, recheck your sensor. (More info in the console)'),
      null
    );
  }
}
