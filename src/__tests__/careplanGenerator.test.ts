import {R4} from '@imaware/ts-fhir-types';
import {expect} from 'chai';
import {DeepPartial} from 'fishery';
import {carePlanGenerator} from '../generator/fhir/r4/careplan';

describe('CarePlanGenerator', () => {
  it('correctly creates a list of 10 careplans', async () => {
    const cps = carePlanGenerator(10);
    expect(cps.length).to.equal(10);
  });

  it('correctly creates a list of 10 careplans with presets', async () => {
    const cps = carePlanGenerator(10, {
      status: 'entered-in-error',
    });
    expect(cps.length).to.equal(10);
    cps.forEach((cp: R4.ICarePlan) => {
      expect(cp.status).to.equal('entered-in-error');
    });
  });

  it('correctly creates a list of 3 careplans with different presets', async () => {
    const presets = [
      {
        status: 'active',
      },
      {
        name: 'foo',
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
    ] as Array<DeepPartial<R4.ICarePlan>>;
    const cps = carePlanGenerator(presets.length, presets);
    expect(cps.length).to.equal(presets.length);
    cps.forEach((cp: R4.ICarePlan, index: number) => {
      expect(cp).to.containSubset(presets[index]);
    });
  });
});
