const cleanPropCalls = (script: string): string => {
  let cleaned = script.toString();

  // clean prop calls
  // ["property"] => .property
  for (let tries = 0; tries < 5; tries += 1) {
    const propMatches = [
      ...cleaned.matchAll(/([^ =:])\[(?:\x60|"|')([a-zA-Z]\w*)(?:\x60|"|')\]/gim),
    ];
    if (propMatches.length > 0) {
      // eslint-disable-next-line no-loop-func
      propMatches.forEach((m) => {
        cleaned = cleaned.replace(m[0], `${m[1]}.${m[2]}`);
      });
    }
  }

  return cleaned;
};

const clean = (script: string): string => {
  return cleanPropCalls(script);
};

export default clean;
