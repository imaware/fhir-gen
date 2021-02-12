import {expect} from 'chai';
import {carePlanFactory} from '../factory/fhir/r4/careplan';
import {uuidV4Regex} from './helpers/patterns';

describe('CarePlanFactory', () => {
  it('correctly creates an careplan with no defaults', async () => {
    const cp = carePlanFactory.build();
    expect(cp.id).to.exist;
    expect(cp.id).to.match(uuidV4Regex);
    expect(cp.resourceType).to.exist;
    expect(cp.resourceType).to.equal('CarePlan');
    expect(cp.status).to.exist;
  });
  it('correctly creates an careplan with defaults', async () => {
    const preSets = {
      id: '9d5058fa-4ea5-47c9-bf62-d9b8426e4fe5',
      status: 'active',
    };
    const cp = carePlanFactory.build(preSets);
    expect(cp.id).to.exist;
    expect(cp.id).to.equal(preSets.id);
    expect(cp.resourceType).to.exist;
    expect(cp.resourceType).to.equal('CarePlan');
    expect(cp.status).to.exist;
    expect(cp.status).to.equal(cp.status);
  });
});
