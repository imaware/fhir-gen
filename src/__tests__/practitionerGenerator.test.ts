import {R4} from '@imaware/ts-fhir-types';
import {expect} from 'chai';
import {DeepPartial} from 'fishery';
import {practitionerGenerator} from '../generator/fhir/r4/practitioner';

describe('practitionerGenerator', () => {
  it('correctly creates a list of 10 observationdefinitions', async () => {
    const cps = practitionerGenerator(10);
    expect(cps.length).to.equal(10);
  });

  it('correctly creates a list of 10 observationdefinitions with presets', async () => {
    const cps = practitionerGenerator(10, {
      active: true,
    });
    expect(cps.length).to.equal(10);
    cps.forEach((cp: R4.IPractitioner) => {
      expect(cp.active).to.equal(true);
    });
  });

  it('correctly creates a list of 3 observationdefinitions with different presets', async () => {
    const presets = [
      {
        active: false,
      },
      {
        patientInstruction: 'foo',
        identifier: [
          {
            use: 'official',
            value: 'something',
            system: 'https://imaware.health/system',
          } as R4.IIdentifier,
        ] as R4.IIdentifier[],
      },
      {
        gender: 'male',
      },
    ] as Array<DeepPartial<R4.IPractitioner>>;
    const cps = practitionerGenerator(presets.length, presets);
    expect(cps.length).to.equal(presets.length);
    cps.forEach((cp: R4.IPractitioner, index: number) => {
      expect(cp).to.containSubset(presets[index]);
    });
  });
});
