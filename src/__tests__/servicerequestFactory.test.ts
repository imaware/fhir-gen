import {expect} from 'chai';
import {serviceRequestFactory} from '../factory/fhir/r4/servicerequest';
import {uuidV4Regex} from './helpers/patterns';

describe('serviceRequestFactory', () => {
  it('correctly creates a servicerequest with no defaults', async () => {
    const cp = serviceRequestFactory.build();
    expect(cp.id).to.exist;
    expect(cp.id).to.match(uuidV4Regex);
    expect(cp.resourceType).to.exist;
    expect(cp.resourceType).to.equal('ServiceRequest');
    expect(cp.status).to.exist;
    expect(cp.intent).to.exist;
  });
  it('correctly creates a servicerequest with defaults', async () => {
    const preSets = {
      id: '9d5058fa-4ea5-47c9-bf62-d9b8426e4fe5',
      status: 'active',
      intent: 'order',
    };
    const cp = serviceRequestFactory.build(preSets);
    expect(cp.id).to.exist;
    expect(cp.id).to.equal(preSets.id);
    expect(cp.resourceType).to.exist;
    expect(cp.resourceType).to.equal('ServiceRequest');
    expect(cp.status).to.exist;
    expect(cp.status).to.equal(cp.status);
    expect(cp.intent).to.exist;
    expect(cp.intent).to.equal(cp.intent);
  });
});
