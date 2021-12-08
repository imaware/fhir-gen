import {expect} from 'chai';
import {Factory} from 'fishery';
import {common} from '../generator/common';

describe('CommonGenerator', () => {
  it('correctly creates a list of 10 numbers', async () => {
    const nums = common(
      Factory.define<number>((): number => 1),
      10,
    );
    expect(nums.length).to.equal(10);
    nums.forEach((n: number) => {
      expect(n).to.equal(1);
    });
  });
  it('correctly creates a list of 5 numbers with different presets', async () => {
    const nums = common(
      Factory.define<number, number>((opts): number => opts.sequence),
      10,
      [1, 2, 3, 4, 5],
    );
    expect(nums.length).to.equal(5);
    let i = 1;
    nums.forEach((n: number) => {
      expect(n).to.equal(i);
      i = i + 1;
    });
  });
});
