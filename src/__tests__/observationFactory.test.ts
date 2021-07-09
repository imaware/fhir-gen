import {R4} from '@imaware/ts-fhir-types';
import {expect} from 'chai';
import {biomarkerValueMap, loincCodes, LOINC_CODE_TYPE} from '../util';
import {observationFactory} from '../factory/fhir/r4/observation';
import {uuidV4Regex} from './helpers/patterns';
import faker from 'faker';

faker.seed(123); // Seed faker for consistency across tests

describe('ObservationFactory', () => {
  it('correctly creates an observation with no defaults', async () => {
    const obs = observationFactory.build();
    expect(obs.id).to.exist;
    expect(obs.id).to.match(uuidV4Regex);
    expect(obs.resourceType).to.exist;
    expect(obs.resourceType).to.equal('Observation');
    expect(obs.status).to.exist;
    expect(obs.status).to.be.oneOf(Object.values(R4.ObservationStatusKind));
    expect(obs.code).to.exist;
    expect(obs.code).to.be.oneOf(loincCodes);
    if (!obs.code.coding?.[0].code) {
      throw new Error(`no code for observation`);
    }
    const code = obs.code.coding?.[0].code as LOINC_CODE_TYPE;
    const obsValueFn = biomarkerValueMap.get(code);
    if (!obsValueFn) {
      throw new Error(`could not get observaftion value fn for ${code}`);
    }
    const obsValue = obsValueFn();
    expect(obs.referenceRange).to.exist;
    expect(obs.referenceRange?.length).to.equal(1);
    expect(obs.referenceRange).to.deep.equal([
      {
        ...obsValue.referenceRange?.[0],
        id: obs.referenceRange?.[0].id,
      } as R4.IObservation_ReferenceRange,
    ]);
    expect(obs.valueQuantity).to.exist;
    expect(obs.valueQuantity?.system).to.equal(obsValue.valueQuantity?.system);
    expect(obs.valueQuantity?.unit).to.equal(obsValue.valueQuantity?.unit);
  });
  it('correctly creates an observation with defaults', async () => {
    const preSets = {
      id: '9d5058fa-4ea5-47c9-bf62-d9b8426e4fe5',
      status: 'final' as R4.ObservationStatusKind,
      code: loincCodes[0],
    };
    const obs = observationFactory.build(preSets);
    expect(obs.id).to.exist;
    expect(obs.id).to.equal(preSets.id);
    expect(obs.resourceType).to.exist;
    expect(obs.resourceType).to.equal('Observation');
    expect(obs.status).to.exist;
    expect(obs.status).to.equal(preSets.status);
    expect(obs.code).to.exist;
    expect(obs.code).to.deep.equal(preSets.code);
    const code = loincCodes[0].coding?.[0].code as LOINC_CODE_TYPE;
    const obsValueFn = biomarkerValueMap.get(code);
    if (!obsValueFn) {
      throw new Error(`could not get observaftion value fn for ${code}`);
    }
    const obsValue = obsValueFn();
    expect(obs.referenceRange).to.exist;
    expect(obs.referenceRange?.length).to.equal(1);
    expect(obs.referenceRange).to.deep.equal([
      {
        ...obsValue.referenceRange?.[0],
        id: obs.referenceRange?.[0].id,
      } as R4.IObservation_ReferenceRange,
    ]);
    expect(obs.valueQuantity).to.exist;
    expect(obs.valueQuantity?.system).to.equal(obsValue.valueQuantity?.system);
    expect(obs.valueQuantity?.unit).to.equal(obsValue.valueQuantity?.unit);
  });
});
