const err = new Error('something failed. oopsie');

const clean = (script: string): string => {
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

// browser behaviour made it dirty
const getDeobVals = (deobScript: string, deobArr: string[]) => {
  let evalScript = `${deobScript};return{`;

  deobArr.forEach((deobCall) => {
    const q = deobCall.includes("'") ? '"' : "'";

    evalScript += `${q}${deobCall}${q}:${decodeURIComponent(deobCall)},`;
  });

  // eslint-disable-next-line no-new-func
  return new Function(`${evalScript}};`)();
};

// waa waa, waaa, youre not using ast! fiend!
const deobfuscate = (script: string): string => {
  const originalScript = script;

  // grab main case
  const mainAkam = /break;case\s?(\w{2}):{\s?((?:\w{2}(?:\+|-)?=\w{2};)?\w{2}\s?=\s?\(function\(\w{2}\)\{return\s?\w{2}\.apply.*?)}\s?break;case\s?(\w{2}):{/i.exec(
    script
  );

  if (!mainAkam || mainAkam.length < 1) throw err;

  // remove the main execution case
  let deobScript = script.replace(
    mainAkam[0],
    `break;case ${mainAkam[1]}:{return;}break;case ${mainAkam[3]}:{`
  );

  // remove the top parent function return
  const topFuncReturn = /return\s?(\w{2}\.call\(this,\s?\w{2}\))/i.exec(deobScript);
  if (!topFuncReturn || topFuncReturn.length < 1) throw err;

  deobScript = deobScript.replace(topFuncReturn[0], topFuncReturn[1]).slice(12, -5);

  let cleanedScript = `// zed_pinocchio;\n${originalScript}`;

  // get deobbed vals and replace
  const deobMatches = [
    // (\w{2})\.(\w{2})\((?:"(.*?)",\s?(\w{2,3})|(\w{2,3}),\s?(\w{2,3}),\s?(\w{2,3}))\)
    ...cleanedScript.matchAll(
      /\w{2}\.\w{2}\((?:".*?",\s?\w{2,3}|\w{2,3},\s?\w{2,3},\s?\w{2,3})\)/gim
    ),
  ];
  if (deobMatches.length > 0) {
    const deobArr = [...new Set(deobMatches.map((m) => encodeURIComponent(m[0])))];
    const deobVals = getDeobVals(deobScript, deobArr);

    // deob everything (not everything, sowwy i lied)
    deobMatches.forEach((m) => {
      cleanedScript = cleanedScript.replace(m[0], `\`${deobVals[encodeURIComponent(m[0])]}\``);
    });
  }

  return clean(cleanedScript);
};

export default deobfuscate;
