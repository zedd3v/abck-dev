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

// waa waa, waaa, youre not using ast! fiend!
const createDeobScope = (declarations: string) => {
  // eslint-disable-next-line no-eval
  eval(declarations);

  // eslint-disable-next-line no-eval
  return (expression: string) => eval(expression);
};

const deobfuscate = (script: string): string => {
  const originalScript = script;

  // grab main case
  const mainAkam = /break;case\s?(\w{2}):{\s?((?:\w{2}(?:\+|-)?=\w{2};)?\w{2}\s?=\s?\(function\(\w{2}\)\{return\s?\w{2}\.apply.*?)}\s?break;case\s?(\w{2}):{/i.exec(
    script
  );

  if (!mainAkam || mainAkam.length < 1) throw err;

  // remove the main execution case
  let cleanedScript = script.replace(
    mainAkam[0],
    `break;case ${mainAkam[1]}:{return;}break;case ${mainAkam[3]}:{`
  );

  // remove the top parent function return
  const topFuncReturn = /return\s?(\w{2}\.call\(this,\s?\w{2}\))/i.exec(cleanedScript);
  if (!topFuncReturn || topFuncReturn.length < 1) throw err;

  cleanedScript = cleanedScript.replace(topFuncReturn[0], topFuncReturn[1]).slice(12, -5);

  // create deob scope
  const deobScope = createDeobScope(cleanedScript);

  // put main execution case back
  cleanedScript = `// zed_pinocchio;\n${originalScript}`;

  // deob everything (not everything, sowwy i lied)
  const deobMatches = [
    ...cleanedScript.matchAll(
      /(\w{2})\.(\w{2})\((?:"(.*?)",\s?(\w{2})|(\w{2}),\s?(\w{2}),\s?(\w{2}))\)/gim
    ),
  ];
  if (deobMatches.length > 0) {
    deobMatches.forEach((m) => {
      cleanedScript = cleanedScript.replace(m[0], `\`${deobScope(`${m[0]}`)}\``);
    });
  }

  return clean(cleanedScript);
};

export default deobfuscate;
