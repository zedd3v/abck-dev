interface Divider {
  divider: string;
  endDivider?: string;
  name: string;
  reverse?: boolean; // incase data is behind the divider - necessary for first children
  children?: Divider[];
}

export interface ParsedSensor {
  [name: string]: string;
}

const dividers: Divider[] = [
  {
    divider: '-1,2,-94,-70,',
    name: 'bmak.fpcf.fpValstr',
    children: [
      {
        divider: ';',
        endDivider: ';',
        name: 'canvas("<@nv45. F1n63r,Pr1n71n6!")',
        reverse: true,
      },
      {
        divider: ';',
        endDivider: ';',
        name: 'canvas("m,Ev!xV67BaU> eh2m<f3AG3@")',
      },
      {
        divider: ';',
        endDivider: ';',
        name: 'bmak.runFonts || bmak.altFonts',
      },
      {
        divider: ';',
        endDivider: ';',
        name: 'pluginInfo()',
      },
      {
        divider: ';',
        endDivider: ';',
        name: 'sessionStorageKey()',
      },
      {
        divider: ';',
        endDivider: ';',
        name: 'localStorageKey()',
      },
      {
        divider: ';',
        endDivider: ';',
        name: 'indexedDbKey()',
      },
      {
        divider: ';',
        endDivider: ';',
        name: 'timezoneOffsetKey()',
      },
      {
        divider: ';',
        endDivider: ';',
        name: 'webrtcKey()',
      },
    ],
  },
  {
    divider: '-1,2,-94,-80,',
    name: 'bmak.ab(bmak.fpcf.fpValstr)',
  },
  {
    divider: '-1,2,-94,-100,',
    name: 'bmak.gd()',
    children: [
      {
        divider: ',',
        endDivider: ',uaend,',
        name: 'bmak.uar()',
        reverse: true,
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.xagg',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.psub',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.lang',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.prod',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.plen',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.pen',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.wen',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.den',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.z1',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.d3',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'window.screen.availWidth',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'window.screen.availHeight',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'window.screen.width',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'window.screen.height',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'window.innerWidth',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'window.innerHeight',
      },
      {
        divider: ',',
        endDivider: ',,',
        name: 'window.outerWidth',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'window.callPhantom',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'window.ActiveXObject',
      },
      {
        divider: ',',
        endDivider: ',',
        name: '"number" == typeof document.documentMode',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'window.chrome && window.chrome.webstore',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'navigator.onLine',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'window.opera',
      },
      {
        divider: ',',
        endDivider: ',',
        name: '"undefined" != typeof InstallTrigger',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")',
      },
      {
        divider: ',',
        endDivider: ',',
        name:
          'typeof window.RTCPeerConnection || "function" == typeof window.mozRTCPeerConnection || "function" == typeof window.webkitRTCPeerConnection',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'window.mozInnerScreenY',
      },
      {
        divider: ',',
        endDivider: ',',
        name: '"function" == typeof navigator.vibrate',
      },
      {
        divider: ',',
        endDivider: ',',
        name: '"function" == typeof navigator.getBattery',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'Array.prototype.forEach',
      },
      {
        divider: ',',
        endDivider: ',',
        name: '"FileReader" in window',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.ab(bmak.uar())',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'randNum.toString().slice(0, 11) + bmak.pi(1e3 * randNum / 2)',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.start_ts / 2',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.loc',
      },
    ],
  },
  {
    divider: '-1,2,-94,-101,',
    name: 'Device Orientation, Motion, Touch Events',
  },
  {
    divider: '-1,2,-94,-102,',
    name: 'bmak.getforminfo()',
  },
  {
    divider: '-1,2,-94,-103,',
    name: 'bmak.vcact (visibilitychange events)',
  },
  {
    divider: '-1,2,-94,-105,',
    name: 'bmak.informinfo',
  },
  {
    divider: '-1,2,-94,-106,',
    name: 'bmak.aj_type + "," + bmak.aj_indx',
  },
  {
    divider: '-1,2,-94,-108,',
    name: 'bmak.kact (keys events)',
    children: [],
  },
  {
    divider: '-1,2,-94,-109,',
    name: 'bmak.dmact (devicemotion events)',
    children: [],
  },
  {
    divider: '-1,2,-94,-110,',
    name: 'bmak.mact (mouse events)',
    children: [],
  },
  {
    divider: '-1,2,-94,-111,',
    name: 'bmak.doact (deviceorientation events)',
    children: [],
  },
  {
    divider: '-1,2,-94,-112,',
    name: 'bmak.getdurl()',
    children: [],
  },
  {
    divider: '-1,2,-94,-114,',
    name: 'bmak.pact (pointer events)',
    children: [],
  },
  {
    divider: '-1,2,-94,-115,',
    name: 'a bunch of shit',
    children: [
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.ke_vel + 1',
        reverse: true,
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.me_vel + 32',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.te_vel + 32',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.doe_vel',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.dme_vel',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.pe_vel',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.ke_vel + bmak.me_vel + bmak.doe_vel + bmak.dme_vel + bmak.te_vel + bmak.pe_vel',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.updatet()',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.init_time',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.start_ts',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.fpcf.td',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.d2',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.ke_cnt',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.me_cnt',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.pi(bmak.d2 / 6)',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.pe_cnt',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.te_cnt',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.get_cf_date() - bmak.start_ts',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.ta',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.n_ck',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.get_cookie()',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.ab(bmak.get_cookie())',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.fpcf.rVal',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.fpcf.rCFP',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.fas()',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.ff(80) + bmak.ff(105) + bmak.ff(90) + bmak.ff(116) + bmak.ff(69)',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.jrs(bmak.start_ts)[0]',
      },
      {
        divider: ',',
        endDivider: ',',
        name: 'bmak.jrs(bmak.start_ts)[1]',
      },
    ],
  },
  {
    divider: '-1,2,-94,-116,',
    name: 'bmak.o9',
    children: [],
  },
  {
    divider: '-1,2,-94,-117,',
    name: 'bmak.tact (touch events)',
    children: [],
  },
  {
    divider: '-1,2,-94,-118,',
    name: '24 ^ bmak.ab(bmak.sensor_data)',
    children: [],
  },
  {
    divider: '-1,2,-94,-119,',
    name: 'bmak.mr',
    children: [],
  },
  {
    divider: '-1,2,-94,-121,',
    name:
      'bmak.od(bmak.cs, bmak.api_public_key).slice(0, 16) + bmak.od(Math.floor(bmak.get_cf_date() / 36e5), bmak.od(bmak.cs, bmak.api_public_key).slice(0, 16)) + bmak.sensor_data + ";" + (bmak.get_cf_date() - t) + ";" + bmak.tst + ";" + (bmak.get_cf_date() - bmak.get_cf_date())',
    children: [],
  },
  {
    divider: '-1,2,-94,-122,',
    name: 'bmak.sed()',
    children: [],
  },
  {
    divider: '-1,2,-94,-123,',
    name: 'bmak.mn_r[bmak.mn_get_current_challenges()[1]]',
    children: [],
  },
  {
    divider: '-1,2,-94,-124,',
    name: 'bmak.mn_r[bmak.mn_get_current_challenges()[2]]',
    children: [],
  },
  {
    divider: '-1,2,-94,-126,',
    name: 'bmak.mn_r[bmak.mn_get_current_challenges()[3]]',
    children: [],
  },
  {
    divider: '-1,2,-94,-127,',
    name: 'bmak.nav_perm',
    children: [],
  },
];

function recursiveSplitByDivider(
  sensor: string,
  detailed: boolean,
  divider: Divider
): ParsedSensor | null {
  const { name, children, reverse, endDivider } = divider;

  let finalParsedSensor: ParsedSensor = {};

  let firstSplit = [];

  let secondSplit = [];

  if (!reverse) {
    firstSplit = sensor.split(divider.divider);
    if (firstSplit.length < 2) return null;

    if (endDivider) {
      if (firstSplit[1].includes(endDivider)) {
        secondSplit = firstSplit[1].split(endDivider);
      } else {
        secondSplit = firstSplit;
      }
    } else {
      secondSplit = firstSplit[1].split('-1,2,-94,');
    }
  } else {
    firstSplit = sensor.split(endDivider || divider.divider);
    if (firstSplit.length < 2) return null;

    secondSplit = firstSplit;
  }

  if (secondSplit.length < 2) return null;

  let value = secondSplit[0];

  if (detailed && children && children.length > 0) {
    children.forEach((child) => {
      if (value.length < 3) return;
      const childParsedSensor = recursiveSplitByDivider(value, detailed, child);
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

export function ParseOldSensor(sensor: string, detailed: boolean): ParsedSensor | null {
  try {
    let parsedSensor: ParsedSensor = {};

    dividers.forEach((d) => {
      const values = recursiveSplitByDivider(sensor, detailed, d);
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
