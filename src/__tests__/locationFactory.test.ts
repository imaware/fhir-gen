import {expect} from 'chai';
import {locationFactory} from '../factory/fhir/r4/location';
import {uuidV4Regex} from './helpers/patterns';

describe('LocationFactory', () => {
  it('correctly creates an location with no defaults', async () => {
    const lc = locationFactory.build();
    expect(lc.id).to.exist;
    expect(lc.id).to.match(uuidV4Regex);
    expect(lc.resourceType).to.exist;
    expect(lc.resourceType).to.equal('Location');
  });
  it('correctly creates an location with defaults', async () => {
    const preSets = {
      id: '89cddcf5-9252-4376-844b-068d65417eda',
      name: 'foo',
      address: {
        line: ['123 Fake St'],
        city: 'Austin',
        state: 'TX',
        postalCode: '78758',
      },
    };
    const lc = locationFactory.build(preSets);
    expect(lc.id).to.exist;
    expect(lc.id).to.equal(preSets.id);
    expect(lc.name).to.exist;
    expect(lc.name).to.equal(preSets.name);
    expect(lc.address).to.exist;
    expect(lc.address).to.deep.equal(preSets.address);
    expect(lc.resourceType).to.exist;
    expect(lc.resourceType).to.equal('Location');
  });
});
