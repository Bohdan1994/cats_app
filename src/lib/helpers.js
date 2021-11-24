export const getCatsWithEmptyCells = (baseArr, totalCount) => {
  const res = [];
  for (let i = 0; i < totalCount; i++) {
    if (!baseArr[i]) {
      res.push(null);
    } else {
      res.push(baseArr[i]);
    }
  }
  return res;
}