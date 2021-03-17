import {expect} from 'chai';
import {practitionerFactory} from '../factory/fhir/r4/practitioner';
import {uuidV4Regex} from './helpers/patterns';

describe('practitionerFactory', () => {
  it('correctly creates a practitioner with no defaults', async () => {
    const cp = practitionerFactory.build();
    expect(cp.id).to.exist;
    expect(cp.id).to.match(uuidV4Regex);
    expect(cp.resourceType).to.exist;
    expect(cp.resourceType).to.equal('Practitioner');
  });
  it('correctly creates a practitioner with defaults', async () => {
    const preSets = {
      id: '9d5058fa-4ea5-47c9-bf62-d9b8426e4fe5',
      active: true,
    };
    const cp = practitionerFactory.build(preSets);
    expect(cp.id).to.exist;
    expect(cp.id).to.equal(preSets.id);
    expect(cp.resourceType).to.exist;
    expect(cp.resourceType).to.equal('Practitioner');
    expect(cp.active).to.equal(true);
  });
});
