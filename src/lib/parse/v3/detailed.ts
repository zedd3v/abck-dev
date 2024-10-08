interface Dividers {
  [key: string]: {
    divider: string;
    keys: {
      index: number;
      key: string;
    }[];
  };
}

const dividers: Dividers = {
  fpt: {
    divider: ';',
    keys: [
      { index: 3, key: 'plugins' },
      { index: 4, key: 'sessionStorage' },
      { index: 5, key: 'localStorage' },
      { index: 6, key: 'indexedDb' },
      { index: 7, key: 'timezoneOffset' },
      { index: 8, key: 'rtc' },
      { index: 9, key: 'colorDepth' },
      { index: 10, key: 'pixelDepth' },
      { index: 11, key: 'cookieEnabled' },
      { index: 12, key: 'javaEnabled' },
      { index: 13, key: 'dnt' },
    ],
  },
  xof: {
    divider: ',',
    keys: [
      { index: 0, key: 'hardwareConcurrency' },
      { index: 1, key: 'pluginArray.length' },
      { index: 2, key: 'window.chrome' },
      { index: 3, key: 'bool(plugins.length)' },
      { index: 4, key: 'deviceMemory' },
    ],
  },
  wsl: {
    divider: ',',
    keys: [
      { index: 0, key: 'jusHeapSizeLimit' },
      { index: 1, key: 'totalJSHeapSize' },
      { index: 2, key: 'usedJSHeapSize' },
      { index: 3, key: 'connection.rtt' },
      { index: 4, key: 'voicesLength' },
      { index: 5, key: 'n.pls[0][0].enabledPlugin' },
      { index: 6, key: 'n.pls.refresh' },
      { index: 7, key: 'n.pls.item(4294967296)' },
      { index: 8, key: 'File.prototype.path' },
      { index: 9, key: 'sharedArrayBuffer' },
    ],
  },
};

const makePrintVal = (v: string | number): string => {
  return typeof v === 'string' ? `"${v}"` : String(v);
};

const parseSensorDetails = (decoded: string): { [key: string]: string } => {
  const json = JSON.parse(decoded);

  const details: { [key: string]: string } = {};

  for (const key in json) {
    const val = json[key];

    if (Array.isArray(val)) {
      // sort alphabetically
      const sorted = [];

      for (const idx in val) {
        for (const subKey in val[idx]) {
          sorted.push(subKey);
        }
      }

      sorted.sort();

      for (const k of sorted) {
        for (const idx in val) {
          if (k in val[idx]) {
            details[`${key}.${k}`] = makePrintVal(val[idx][k]);

            if (k in dividers) {
              const { divider, keys } = dividers[k];

              val[idx][k].split(divider).forEach((v: string, i: number) => {
                const dividerKey = keys.find((k) => k.index === i);
                if (dividerKey) {
                  details[`${key}.${k}.${dividerKey.key}`] = makePrintVal(v);
                }
              });
            }
          }
        }
      }
    } else {
      details[key] = makePrintVal(val);

      if (key in dividers) {
        const { divider, keys } = dividers[key];

        val.split(divider).forEach((v: string, i: number) => {
          const dividerKey = keys.find((k) => k.index === i);
          if (dividerKey) {
            details[`${key}.${dividerKey.key}`] = makePrintVal(v);
          }
        });
      }
    }
  }

  return details;
};

export default parseSensorDetails;
