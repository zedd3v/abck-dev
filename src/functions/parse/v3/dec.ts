const decodeArr = [
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, -1, 2, 3, 4, 5, -1, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, -1, 58, 59, 60, 61, 62, 63,
  64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
  88, 89, 90, 91,
];

const chars =
  ' !#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~';

const decodeChar = (char: string, shiftedComp: number) => {
  let pos = chars.indexOf(char);
  if (pos < 92) pos += 92;

  pos -= shiftedComp % 92;
  if (pos > 92) pos -= 92;

  return String.fromCharCode(decodeArr.indexOf(pos));
};

export const firstDec = (sensor: string, bmSzFirstComp: number): string => {
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

export const secondDec = (payload: string, bmSzSecondComp: number): string => {
  console.log('\nbmSzSecondComp', bmSzSecondComp); // 7229381

  const pcs = payload.split(':');
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

  return pcs.join(':');
};
