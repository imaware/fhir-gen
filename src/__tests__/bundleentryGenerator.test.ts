import {R4} from '@imaware/ts-fhir-types';
import {expect} from 'chai';
import {DeepPartial} from 'fishery';
import {bundleEntryGenerator} from '../generator/fhir/r4/bundleentry';

describe('BundleGenerator', () => {
  it('correctly creates a list of 10 bundle entries', async () => {
    const bds = bundleEntryGenerator(10);
    expect(bds.length).to.equal(10);
  });

  it('correctly creates a list of 10 bundle entries with presets', async () => {
    const bds = bundleEntryGenerator(10, {
      fullUrl: 'foo',
    });
    expect(bds.length).to.equal(10);
    bds.forEach((bd: R4.IBundle_Entry) => {
      expect(bd.fullUrl).to.equal('foo');
    });
  });

  it('correctly creates a list of 2 bundle entries with different presets', async () => {
    const presets = [
      {
        fullUrl: 'foo',
      },
      {
        id: 'foo',
      },
    ] as Array<DeepPartial<R4.IBundle_Entry>>;
    const bds = bundleEntryGenerator(presets.length, presets);
    expect(bds.length).to.equal(presets.length);
    bds.forEach((bd: R4.IBundle_Entry, index: number) => {
      expect(bd).to.containSubset(presets[index]);
    });
  });
});
