import {R4} from '@imaware/ts-fhir-types';
import {expect} from 'chai';
import {DeepPartial} from 'fishery';
import {specimenGenerator} from '../generator/fhir/r4/specimen';

describe('specimenGenerator', () => {
  it('correctly creates a list of 10 specimens', async () => {
    const cps = specimenGenerator(10);
    expect(cps.length).to.equal(10);
  });

  it('correctly creates a list of 10 specimens with presets', async () => {
    const cps = specimenGenerator(10, {
      status: R4.SpecimenStatusKind['_available'],
    });
    expect(cps.length).to.equal(10);
    cps.forEach((cp: R4.ISpecimen) => {
      expect(cp.status).to.equal('available');
    });
  });

  it('correctly creates a list of 3 specimens with different presets', async () => {
    const presets = [
      {
        status: R4.SpecimenStatusKind['_available'],
      },
      {
        identifier: [
          {
            use: 'official',
            value: 'something',
            system: 'https://imaware.health/system',
          } as R4.IIdentifier,
        ] as R4.IIdentifier[],
      },
      {
        name: 'bar',
        experimental: true,
      },
    ] as Array<DeepPartial<R4.ISpecimen>>;
    const cps = specimenGenerator(presets.length, presets);
    expect(cps.length).to.equal(presets.length);
    cps.forEach((cp: R4.ISpecimen, index: number) => {
      expect(cp).to.containSubset(presets[index]);
    });
  });
});
