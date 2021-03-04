import {R4} from '@ahryman40k/ts-fhir-types';
import {expect} from 'chai';
import {DeepPartial} from 'fishery';
import {bundleGenerator} from '../generator/fhir/r4/bundle';

describe('BundleGenerator', () => {
  it('correctly creates a list of 10 bundles', async () => {
    const bds = bundleGenerator(10);
    expect(bds.length).to.equal(10);
  });

  it('correctly creates a list of 10 bundles with presets', async () => {
    const bds = bundleGenerator(10, {
      type: 'transaction' as R4.BundleTypeKind,
    });
    expect(bds.length).to.equal(10);
    bds.forEach((bd: R4.IBundle) => {
      expect(bd.type).to.equal('transaction');
    });
  });

  it('correctly creates a list of 2 bundles with different presets', async () => {
    const presets = [
      {
        type: 'batch',
      },
      {
        id: 'foo',
      },
    ] as Array<DeepPartial<R4.IBundle>>;
    const bds = bundleGenerator(presets.length, presets);
    expect(bds.length).to.equal(presets.length);
    bds.forEach((bd: R4.IBundle, index: number) => {
      expect(bd).to.containSubset(presets[index]);
    });
  });
});
