import {expect} from 'chai';
import {organizationFactory} from '../factory/fhir/r4/organization';
import {uuidV4Regex} from './helpers/patterns';

describe('OrganizationFactory', () => {
  it('correctly creates an organization with no defaults', async () => {
    const org = organizationFactory.build();
    expect(org.id).to.exist;
    expect(org.id).to.match(uuidV4Regex);
    expect(org.resourceType).to.exist;
    expect(org.resourceType).to.equal('Organization');
    expect(org.name).to.exist;
    expect(org.telecom).to.exist;
    expect(org.telecom?.length).to.be.greaterThan(0).and.lessThan(4);
    expect(org.address).to.exist;
    expect(org.address?.length).to.equal(1);
  });
  it('correctly creates an organization with defaults', async () => {
    const preSets = {
      id: '89cddcf5-9252-4376-844b-068d65417eda',
      name: 'foo',
    };
    const org = organizationFactory.build(preSets);
    expect(org.id).to.exist;
    expect(org.id).to.equal(preSets.id);
    expect(org.resourceType).to.exist;
    expect(org.resourceType).to.equal('Organization');
    expect(org.name).to.exist;
    expect(org.name).to.equal(preSets.name);
    expect(org.telecom).to.exist;
    expect(org.telecom?.length).to.be.greaterThan(0).and.lessThan(4);
    expect(org.address).to.exist;
    expect(org.address?.length).to.equal(1);
  });
});
