import {expect} from 'chai';
import {addressFactory} from '../factory/fhir/r4/address';
import {uuidV4Regex} from './helpers/patterns';

describe('AddressFactory', () => {
  it('correctly creates an address with no defaults', async () => {
    const addr = addressFactory.build();
    expect(addr.id).to.exist;
    expect(addr.id).to.match(uuidV4Regex);
    expect(addr.type).to.exist;
    expect(addr.type).to.equal('both');
    expect(addr.line).to.exist;
    expect(addr.line?.length).to.be.greaterThan(0);
    expect(addr.city).to.exist;
    expect(addr.city?.length).to.be.greaterThan(0);
    expect(addr.state).to.exist;
    expect(addr.state?.length).to.be.greaterThan(0);
    expect(addr.postalCode).to.exist;
    expect(addr.postalCode?.length).to.be.greaterThan(0);
    expect(addr.country).to.exist;
    expect(addr.country).to.equal('US');
  });
  it('correctly creates an address with defaults', async () => {
    const preSets = {
      id: '9d5058fa-4ea5-47c9-bf62-d9b8426e4fe5',
      line: ['123 Fake St'],
      city: 'Austin',
      state: 'TX',
      postalCode: '78758',
    };
    const addr = addressFactory.build(preSets);
    expect(addr.id).to.exist;
    expect(addr.id).to.equal(preSets.id);
    expect(addr.type).to.exist;
    expect(addr.type).to.equal('both');
    expect(addr.line).to.exist;
    expect(addr.line).to.equal(preSets.line);
    expect(addr.city).to.exist;
    expect(addr.city).to.equal(preSets.city);
    expect(addr.state).to.exist;
    expect(addr.state).to.equal(preSets.state);
    expect(addr.postalCode).to.exist;
    expect(addr.postalCode).to.equal(preSets.postalCode);
    expect(addr.country).to.exist;
    expect(addr.country).to.equal('US');
  });
});
