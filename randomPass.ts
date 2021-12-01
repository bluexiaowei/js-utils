export default function randomPass(length = 6) {
  const A_Z = [65, 90];
  const a_z = [97, 122];
  const math_0_9 = [48, 57];
  const other = [[33, 47], [58, 64], [91, 96], [123, 126]];

  const codes = Array.from({ length }).map(() => {
    const minMax = getMinMax();
    const index = getRandomArbitrary(minMax[0], minMax[1]);

    return String.fromCharCode(index);
  });

  return codes.join("");

  function getMinMax() {
    const space = getRandomArbitrary(1, 20);
    if (1 <= space && space <= 6) {
      return [A_Z[0], A_Z[1]];
    }

    if (7 <= space && space <= 12) {
      return [a_z[0], a_z[1]];
    }

    if (13 <= space && space <= 18) {
      return [math_0_9[0], math_0_9[1]];
    }

    const weight = getRandomArbitrary(1, 4);

    return [other[weight - 1][0], other[weight - 1][1]];
  }

  function getRandomArbitrary(min = 0, max = 0) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  }
}
