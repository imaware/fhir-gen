import {R4} from '@imaware/ts-fhir-types';
import {expect} from 'chai';
import {specimenFactory} from '../factory/fhir/r4/specimen';
import {uuidV4Regex} from './helpers/patterns';

describe('specimenFactory', () => {
  it('correctly creates a specimen with no defaults', async () => {
    const cp = specimenFactory.build();
    expect(cp.id).to.exist;
    expect(cp.id).to.match(uuidV4Regex);
    expect(cp.resourceType).to.exist;
    expect(cp.resourceType).to.equal('Specimen');
  });
  it('correctly creates a specimen with defaults', async () => {
    const preSets = {
      id: '9d5058fa-4ea5-47c9-bf62-d9b8426e4fe5',
      status: R4.SpecimenStatusKind['_available'],
    };
    const cp = specimenFactory.build(preSets);
    expect(cp.id).to.exist;
    expect(cp.id).to.equal(preSets.id);
    expect(cp.resourceType).to.exist;
    expect(cp.resourceType).to.equal('Specimen');
    expect(cp.status).to.exist;
    expect(cp.status).to.equal(cp.status);
  });
});
