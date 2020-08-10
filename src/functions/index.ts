interface Dividers {
  [divider: string]: {
    name: string;
    children: {
      divider: string;
      name: string;
    }[];
  };
}

export interface ParsedSensor {
  [name: string]: string;
}

export const ParseSensor = (sensor: string): ParsedSensor | null => {
  const dividers: Dividers = {
    '-1,2,-94,-70,': {
      name: 'bmak.fpcf.fpValstr',
      children: [],
    },
    '-1,2,-94,-80,': {
      name: 'bmak.ab(bmak.fpcf.fpValstr)',
      children: [],
    },
    '-1,2,-94,-100,': {
      name: 'bmak.gd()',
      children: [],
    },
    '-1,2,-94,-101,': {
      name: 'DeviceOrientationEvent, DeviceMotionEvent, TouchEvent',
      children: [],
    },
    '-1,2,-94,-102,': {
      name: 'bmak.getforminfo()',
      children: [],
    },
    '-1,2,-94,-103,': {
      name: 'bmak.vcact (visibilitychange events)',
      children: [],
    },
    '-1,2,-94,-105,': {
      name: 'bmak.informinfo',
      children: [],
    },
    '-1,2,-94,-106,': {
      name: 'bmak.aj_type + "," + bmak.aj_indx',
      children: [],
    },
    '-1,2,-94,-108,': {
      name: 'bmak.kact (keys events)',
      children: [],
    },
    '-1,2,-94,-109,': {
      name: 'bmak.dmact (devicemotion events)',
      children: [],
    },
    '-1,2,-94,-110,': {
      name: 'bmak.mact (mouse events)',
      children: [],
    },
    '-1,2,-94,-111,': {
      name: 'bmak.doact (deviceorientation events)',
      children: [],
    },
    '-1,2,-94,-112,': {
      name: 'bmak.getdurl()',
      children: [],
    },
    '-1,2,-94,-114,': {
      name: 'bmak.pact (pointer events)',
      children: [],
    },
    '-1,2,-94,-115,': {
      name: 'a bunch of shit',
      children: [],
    },
    '-1,2,-94,-116,': {
      name: 'bmak.o9',
      children: [],
    },
    '-1,2,-94,-117,': {
      name: 'bmak.tact (touch events)',
      children: [],
    },
    '-1,2,-94,-118,': {
      name: '24 ^ bmak.ab(bmak.sensor_data)',
      children: [],
    },
    '-1,2,-94,-119,': {
      name: 'bmak.mr',
      children: [],
    },
    '-1,2,-94,-121,': {
      name:
        'bmak.od(bmak.cs, bmak.api_public_key).slice(0, 16) + bmak.od(Math.floor(bmak.get_cf_date() / 36e5), bmak.od(bmak.cs, bmak.api_public_key).slice(0, 16)) + bmak.sensor_data + ";" + (bmak.get_cf_date() - t) + ";" + bmak.tst + ";" + (bmak.get_cf_date() - bmak.get_cf_date())',
      children: [],
    },
    '-1,2,-94,-122,': {
      name: 'bmak.sed()',
      children: [],
    },
    '-1,2,-94,-123,': {
      name: 'bmak.mn_r[bmak.mn_get_current_challenges()[1]]',
      children: [],
    },
    '-1,2,-94,-124,': {
      name: 'bmak.mn_r[bmak.mn_get_current_challenges()[2]]',
      children: [],
    },
    '-1,2,-94,-126,': {
      name: 'bmak.mn_r[bmak.mn_get_current_challenges()[3]]',
      children: [],
    },
    '-1,2,-94,-127,': {
      name: 'bmak.nav_perm',
      children: [],
    },
  };

  const parsedSensor: ParsedSensor = {};

  Object.keys(dividers).forEach((key) => {
    const divider = dividers[key];

    const { name } = divider;

    const firstSplit = sensor.split(key);
    if (firstSplit.length < 2) return;

    const secondSplit = firstSplit[1].split('-1,2,-94,');
    if (secondSplit.length < 2) return;

    const value = secondSplit[0];

    if (divider.children.length > 0) {
      parsedSensor[name] = value; // TODO: parse children
    } else {
      parsedSensor[name] = value;
    }
  });

  return Object.keys(parsedSensor).length === 0 ? null : parsedSensor;
};

export const CamelCaseToSentenceCase = (camelCaseString: string): string => {
  const result = camelCaseString.replace(/([A-Z])/g, ' $1');
  return `${result.charAt(0).toUpperCase()}${result.slice(1)}`;
};
