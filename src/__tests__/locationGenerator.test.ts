import {R4} from '@imaware/ts-fhir-types';
import {expect} from 'chai';
import {DeepPartial} from 'fishery';
import {locationGenerator} from '../generator/fhir/r4/location';

describe('LocationGenerator', () => {
  it('correctly creates a list of 10 locations', async () => {
    const lcs = locationGenerator(10);
    expect(lcs.length).to.equal(10);
  });

  it('correctly creates a list of 10 locations with presets', async () => {
    const lcs = locationGenerator(10, {
      name: 'foo',
    });
    expect(lcs.length).to.equal(10);
    lcs.forEach((lc: R4.ILocation) => {
      expect(lc.name).to.equal('foo');
    });
  });

  it('correctly creates a list of 3 locations with different presets', async () => {
    const presets = [
      {
        name: 'foo1',
      },
      {
        address: {
          line: ['123 Fake St'],
          city: 'Austin',
          state: 'TX',
          postalCode: '78758',
        },
      },
      {
        id: 'bar',
      },
    ] as Array<DeepPartial<R4.ILocation>>;
    const lcs = locationGenerator(presets.length, presets);
    expect(lcs.length).to.equal(presets.length);
    lcs.forEach((lc: R4.ILocation, index: number) => {
      expect(lc).to.containSubset(presets[index]);
    });
  });
});
