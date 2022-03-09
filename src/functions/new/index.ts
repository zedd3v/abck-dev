/* eslint-disable no-bitwise */
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
  { divider: '-112', name: `document.URL.replace(/\\|"/g, '')` },
  { divider: '-119', name: 'bmak.mr' },
  { divider: '-122', name: 'sed' },
  { divider: '-123', name: 'mn_r part 1' },
  { divider: '-124', name: 'mn_r part 2' },
  { divider: '-126', name: 'mn_r part 3' },
  { divider: '-127', name: 'bmak.nav_perm' },
  { divider: '-70', name: 'bmak.fpcf.fpValStr' },
  { divider: '-80', name: 'fpValHash' },
  { divider: '-90', name: 'fmt.Sprint(dynamicFuncRes)' },
  { divider: '-116', name: 'strconv.Itoa(bmak.o9)' },
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

const decodeArr = JSON.parse(
  '[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,-1,2,3,4,5,-1,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,-1,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91]'
);

const decodeChar = (char: string, shiftedComp: number) => {
  let pos = ' !#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~'.indexOf(
    char
  );

  if (pos < 92) pos += 92;
  pos -= shiftedComp % 92;
  if (pos > 92) pos -= 92;

  return String.fromCharCode(decodeArr.indexOf(pos));
};

const firstDec = (sensor: string, bmSzFirstComp: number): string => {
  const dec = [];

  let bmSzFC = bmSzFirstComp;

  for (let i = 0; i < sensor.length; i += 1) {
    const shifted = (bmSzFC >> 8) & 65535;
    bmSzFC *= 65793;
    bmSzFC &= 4294967295;
    bmSzFC += 4282663;
    bmSzFC &= 8388607;

    const charCode = sensor.charCodeAt(i);
    if (charCode < 32 || charCode === 39 || charCode === 34 || charCode === 92) {
      dec[i] = sensor[i];
    } else {
      dec[i] = decodeChar(sensor[i], shifted);
    }
  }

  return dec.join('');
};

const secondDec = (payload: string, bmSzSecondComp: number): string => {
  const pcs = payload.split(',');
  const mixingIndexes = [];
  let bmSzSC = bmSzSecondComp;

  for (let i = 0; i < pcs.length; i += 1) {
    const x = ((bmSzSC >> 8) & 65535) % pcs.length;
    bmSzSC *= 65793;
    bmSzSC &= 4294967295;
    bmSzSC += 4282663;
    bmSzSC &= 8388607;

    const y = ((bmSzSC >> 8) & 65535) % pcs.length;
    bmSzSC *= 65793;
    bmSzSC &= 4294967295;
    bmSzSC += 4282663;
    bmSzSC &= 8388607;

    mixingIndexes.push([x, y]);
  }

  for (let i = mixingIndexes.length - 1; i >= 0; i -= 1) {
    const [x, y] = mixingIndexes[i];

    const pc = pcs[x];
    pcs[x] = pcs[y];
    pcs[y] = pc;
  }

  return pcs.join(',');
};

const parseBmSzComps = (sensor: string): number[] => {
  return sensor
    .split('2;')[1]
    .split(';')
    .slice(0, 2)
    .map((n) => Number(n));
};

const getSeperator = (cleanSensor: string): string => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: Object is possibly 'null'.
  return /2([a-zA-Z0-9!@#%&\-_=;:<>,~]+)2\1(?:7a7)/i.exec(cleanSensor)[1];
};

export function ParseNewSensor(sensor: string, detailed: boolean): ParsedSensor | null {
  try {
    const bmSzComps = parseBmSzComps(sensor);

    const dirty = sensor.split(';').slice(4).join(';');

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
