import {R4} from '@ahryman40k/ts-fhir-types';
import {expect} from 'chai';
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
});
