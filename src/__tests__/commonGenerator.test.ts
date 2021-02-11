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
});
