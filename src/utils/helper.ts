export function randomArray(length: number, max: number) {
  return Array.apply(null, Array(length)).map(function () {
    return Math.round(Math.random() * max);
  });
}
