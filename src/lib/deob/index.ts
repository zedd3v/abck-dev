import clean from './clean';

const err = new Error('something failed. oopsie');

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
  const mainAkam =
    /(do{switch\(\w+\){|break;)case\s?(\w{2}):{\s?((?:\w{2}(?:\+|-)?=\w{2};)?\w{2}\s?=\s?\(function\(\w{2}\)\{return\s?\w{2}\.apply.*?)}\s?break;case\s?(\w{2}):{/i.exec(
      script
    );

  if (!mainAkam || mainAkam.length < 3) throw err;

  // remove the main execution case
  let deobScript = script.replace(
    mainAkam[0],
    `${mainAkam[1]}case ${mainAkam[2]}:{return;}break;case ${mainAkam[4]}:{`
  );

  // remove the top parent function return
  const topFuncReturn = /return\s?(\w{2}\.call\(this,\s?\w{2}\))/i.exec(deobScript);
  if (!topFuncReturn || topFuncReturn.length < 1) throw err;

  deobScript = deobScript.replace(topFuncReturn[0], topFuncReturn[1]).slice(12, -5);

  let cleanedScript = `// zed_pinocchio;\n${originalScript}`;

  // get deobbed vals and replace
  const deobMatches = [
    ...cleanedScript.matchAll(
      /\w{2}\.\w{2}\((?:\w{2,3},\s?\w{2,3}|\w{2,3},\s?\w{2,3},\s?\w{2,3},\s?\w{2,3}|".*?",\s?\w{2,3}|\w{2,3},\s?\w{2,3},\s?\w{2,3})\)/gim
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
