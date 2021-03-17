import {expect} from 'chai';
import {observationDefinitionFactory} from '../factory/fhir/r4/observationdefinition';
import {uuidV4Regex} from './helpers/patterns';

describe('observationDefinitionFactory', () => {
  it('correctly creates a observationdefinition with no defaults', async () => {
    const cp = observationDefinitionFactory.build();
    expect(cp.id).to.exist;
    expect(cp.id).to.match(uuidV4Regex);
    expect(cp.resourceType).to.exist;
    expect(cp.resourceType).to.equal('ObservationDefinition');
    expect(cp.code).to.exist;
  });
  it('correctly creates a observationdefinition with defaults', async () => {
    const preSets = {
      id: '9d5058fa-4ea5-47c9-bf62-d9b8426e4fe5',
      preferredReportName: 'Sample Report',
    };
    const cp = observationDefinitionFactory.build(preSets);
    expect(cp.id).to.exist;
    expect(cp.id).to.equal(preSets.id);
    expect(cp.resourceType).to.exist;
    expect(cp.resourceType).to.equal('ObservationDefinition');
    expect(cp.code).to.exist;
    expect(cp.preferredReportName).to.equal('Sample Report');
  });
});
