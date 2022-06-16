import { getSeperator, isJSON, isBool, RawSensorJson } from './utils';
import { secondDec, firstDec } from './dec';

interface Divider {
  divider: string;
  endDivider?: string;
  name: string;
  reverse?: boolean; // incase data is behind the divider - necessary for first children
  children?: Divider[];
  last?: boolean;
}

export interface ParsedSensor {
  [name: string]: string;
}

const dividers: Divider[] = [
  { divider: '-100', name: 'deviceData' },
  { divider: '-105', name: 'informinfo' },
  { divider: '-108', name: 'bmak.kact' },
  { divider: '-101', name: 'windowEvents' },
  { divider: '-110', name: 'bmak.mact' },
  { divider: '-117', name: 'bmak.tact' },
  { divider: '-109', name: 'bmak.dmact' },
  { divider: '-102', name: 'informinfo' },
  { divider: '-111', name: 'bmak.doact' },
  { divider: '-114', name: 'bmak.pact' },
  { divider: '-103', name: 'bmak.vcact' },
  { divider: '-106', name: 'bmak.aj_type + bmak.aj_indx' },
  { divider: '-115', name: 'bunch of stuff' },
  { divider: '-112', name: 'document.URL' },
  { divider: '-119', name: 'bmak.mr' },
  { divider: '-122', name: 'sed' },
  { divider: '-123', name: 'mn_r part 1' },
  { divider: '-124', name: 'mn_r part 2' },
  { divider: '-126', name: 'mn_r part 3' },
  { divider: '-127', name: 'bmak.nav_perm' },
  { divider: '-70', name: 'bmak.fpcf.fpValStr' },
  { divider: '-80', name: 'fpValHash' },
  { divider: '-90', name: 'dynamicFuncRes' },
  { divider: '-116', name: 'bmak.o9' },
  { divider: '-129', name: 'some fingerprint stuff', last: true },
];

function recursiveSplitByDivider(
  sensor: string,
  detailed: boolean,
  divider: Divider,
  seperator: string
): ParsedSensor | null {
  const { name, children, reverse, endDivider, last } = divider;

  let finalParsedSensor: ParsedSensor = {};

  let firstSplit = [];

  let secondSplit = [];

  if (!reverse) {
    firstSplit = sensor.split(divider.divider + seperator);

    if (firstSplit.length < 2) return null;

    if (endDivider) {
      if (firstSplit[1].includes(endDivider)) {
        secondSplit = firstSplit[1].split(endDivider);
      } else {
        secondSplit = firstSplit;
      }
    } else {
      secondSplit = firstSplit[1].split(seperator);
    }
  } else {
    firstSplit = sensor.split(endDivider || divider.divider);
    if (firstSplit.length < 2) return null;

    secondSplit = firstSplit;
  }

  if (!last && secondSplit.length < 2) return null;

  let value = secondSplit[0];

  if (detailed && children && children.length > 0) {
    children.forEach((child) => {
      if (value.length < 3) return;
      const childParsedSensor = recursiveSplitByDivider(value, detailed, child, seperator);
      if (childParsedSensor) {
        finalParsedSensor = {
          ...finalParsedSensor,
          ...childParsedSensor,
        };
        const replaceValue = `${childParsedSensor[child.name]}${
          child.endDivider ? child.endDivider : ''
        }`;
        value = value.replace(replaceValue, '');
      } else {
        let splitReplace = '';
        if (child.endDivider) splitReplace = child.endDivider;
        [, value] = value.split(splitReplace);
      }
    });
  } else {
    finalParsedSensor = {
      ...finalParsedSensor,
      [name]: value,
    };
  }

  return finalParsedSensor;
}

const parseBmSzComps = (sensor: string): number[] => {
  return sensor
    .slice(2)
    .split(';')
    .slice(0, 2)
    .map((n) => Number(n));
};

export function ParseNewSensor(sensor: string, detailed: boolean): ParsedSensor | null {
  try {
    let rawSensor = sensor.toString();

    const jsonCheck = isJSON(sensor);
    if (!isBool(jsonCheck) && 'sensor_data' in (jsonCheck as RawSensorJson)) {
      rawSensor = (jsonCheck as RawSensorJson).sensor_data;
    }

    const bmSzComps = parseBmSzComps(rawSensor);

    const dirty = rawSensor.split(';').slice(4).join(';');

    const halfClean = firstDec(dirty, bmSzComps[0]);

    const clean = secondDec(halfClean, bmSzComps[1]);

    const seperator = getSeperator(clean);

    // eslint-disable-next-line no-console
    console.log('\n', clean, '\n');

    let parsedSensor: ParsedSensor = {};

    dividers.forEach((d) => {
      const values = recursiveSplitByDivider(clean, detailed, d, seperator);
      parsedSensor = { ...parsedSensor, ...values };
    });

    return Object.keys(parsedSensor).length === 0 ? null : parsedSensor;
  } catch (e) {
    return (
      // eslint-disable-next-line no-console
      console.error(e),
      // eslint-disable-next-line no-alert
      alert('An error occured, recheck your sensor. (More info in the console)'),
      null
    );
  }
}

export const CamelCaseToSentenceCase = (camelCaseString: string): string => {
  const result = camelCaseString.replace(/([A-Z])/g, ' $1');
  return `${result.charAt(0).toUpperCase()}${result.slice(1)}`;
};
