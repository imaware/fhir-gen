import {R4} from '@imaware/ts-fhir-types';
import {expect} from 'chai';
import {random} from 'faker';
import {DeepPartial} from 'fishery';
import {observationGenerator} from '../generator/fhir/r4/observation';

describe('ObservationGenerator', () => {
  it('correctly creates a list of 10 observations', async () => {
    const obs = observationGenerator(10);
    expect(obs.length).to.equal(10);
  });

  it('correctly creates a list of 10 observations with presets', async () => {
    const obs = observationGenerator(10, {
      status: 'final' as R4.ObservationStatusKind,
    });
    expect(obs.length).to.equal(10);
    obs.forEach((o: R4.IObservation) => {
      expect(o.status).to.equal('final');
    });
  });

  it('correctly creates a list of 3 observations with different presets', async () => {
    const presets = [
      {
        status: 'active',
      },
      {
        subject: {
          reference: `Patient/${random.uuid()}`,
        },
      },
      {
        specimen: {
          reference: `Specimen/${random.uuid()}`,
        },
      },
    ] as Array<DeepPartial<R4.IObservation>>;
    const obs = observationGenerator(presets.length, presets);
    expect(obs.length).to.equal(presets.length);
    obs.forEach((ob: R4.IObservation, index: number) => {
      expect(ob).to.containSubset(presets[index]);
    });
  });
});
