import { getCatsWithEmptyCells } from '../helpers';

const mockData = [{}, {}];
const totalCountMock = 5;

describe("getCatsWithEmptyCells", () => {
  it('should returns an empty array when we do not pass anything', function () {
    const cells = getCatsWithEmptyCells();

    expect(cells).toEqual([]);
  });

  it('should returns an array with null values', function () {
    const cells = getCatsWithEmptyCells(mockData, totalCountMock);
    const correctDataMock = [{}, {}, null, null, null];

    expect(cells).toEqual(correctDataMock);
  });

  it('should returns an array without null values when array`s length is equal with total count', function () {
    const cells = getCatsWithEmptyCells([{}, {}, {}], 3);
    const correctDataMock = [{}, {}, {}];

    expect(cells).toEqual(correctDataMock);
  });
})