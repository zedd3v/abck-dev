export const getSeperator = (cleanSensor: string): string => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: Object is possibly 'null'.
  return /2([a-zA-Z0-9!@#%&\-_=;:<>,~]+)2\1(?:7a7)/i.exec(cleanSensor)[1];
};

export const isBool = (v: unknown): boolean => typeof v === 'boolean';

export interface RawSensorJson {
  // eslint-disable-next-line camelcase
  sensor_data: string;
}

export const isJSON = (str: string): boolean | RawSensorJson => {
  try {
    const o = JSON.parse(str);

    if (o && typeof o === 'object') {
      return o;
    }
  } catch {
    // i want func to not crush, but don't care about the message
  }

  return false;
};
