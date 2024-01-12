import { splitArray } from './arrays';

describe('splitArray', () => {
  it('splits into equal parts', () => {
    const input = [1, 2, 3, 4, 5, 6];
    const expectedOutput = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];
    const result = splitArray(input, 3);
    expect(result).toEqual(expectedOutput);
  });

  it("doesn't split when the number of splits is 1", () => {
    const input = [1, 2, 3, 4, 5, 6];
    const expectedOutput = [[1, 2, 3, 4, 5, 6]];
    const result = splitArray(input, 1);
    expect(result).toEqual(expectedOutput);
  });
});
