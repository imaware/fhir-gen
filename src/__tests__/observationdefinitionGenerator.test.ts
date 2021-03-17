import {R4} from '@imaware/ts-fhir-types';
import {expect} from 'chai';
import {DeepPartial} from 'fishery';
import {observationDefinitionGenerator} from '../generator/fhir/r4/observationdefinition';

describe('observationDefinitionGenerator', () => {
  it('correctly creates a list of 10 observationdefinitions', async () => {
    const cps = observationDefinitionGenerator(10);
    expect(cps.length).to.equal(10);
  });

  it('correctly creates a list of 10 observationdefinitions with presets', async () => {
    const cps = observationDefinitionGenerator(10, {
      preferredReportName: 'Sample Report',
    });
    expect(cps.length).to.equal(10);
    cps.forEach((cp: R4.IObservationDefinition) => {
      expect(cp.preferredReportName).to.equal('Sample Report');
    });
  });

  it('correctly creates a list of 3 observationdefinitions with different presets', async () => {
    const presets = [
      {
        permittedDataType: ['string'],
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
        preferredReportName: 'Sample Report',
      },
    ] as Array<DeepPartial<R4.IObservationDefinition>>;
    const cps = observationDefinitionGenerator(presets.length, presets);
    expect(cps.length).to.equal(presets.length);
    cps.forEach((cp: R4.IObservationDefinition, index: number) => {
      expect(cp).to.containSubset(presets[index]);
    });
  });
});
