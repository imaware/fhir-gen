import {R4} from '@ahryman40k/ts-fhir-types';
import {expect} from 'chai';
import {DeepPartial} from 'fishery';
import {accountGenerator} from '../generator/fhir/r4/account';

describe('AccountGenerator', () => {
  it('correctly creates a list of 10 accounts', async () => {
    const acts = accountGenerator(10);
    expect(acts.length).to.equal(10);
  });

  it('correctly creates a list of 10 accounts with presets', async () => {
    const acts = accountGenerator(10, {
      name: 'foo',
    });
    expect(acts.length).to.equal(10);
    acts.forEach((act: R4.IAccount) => {
      expect(act.name).to.equal('foo');
    });
  });

  it('correctly creates a list of 3 accounts with different presets', async () => {
    const presets = [
      {
        name: 'foo',
      },
      {
        active: true,
      },
      {
        id: 'bar',
      },
    ] as Array<DeepPartial<R4.IAccount>>;
    const acts = accountGenerator(presets.length, presets);
    expect(acts.length).to.equal(presets.length);
    acts.forEach((act: R4.IAccount, index: number) => {
      expect(act).to.containSubset(presets[index]);
    });
  });
});
