import {expect} from 'chai';
import {accountFactory} from '../factory/fhir/r4/account';
import {uuidV4Regex} from './helpers/patterns';

describe('AccountFactory', () => {
  it('correctly creates an account with no defaults', async () => {
    const ac = accountFactory.build();
    expect(ac.id).to.exist;
    expect(ac.id).to.match(uuidV4Regex);
    expect(ac.resourceType).to.exist;
    expect(ac.resourceType).to.equal('Account');
  });
  it('correctly creates an account with defaults', async () => {
    const preSets = {
      id: '89cddcf5-9252-4376-844b-068d65417eda',
      name: 'foo',
    };
    const ac = accountFactory.build(preSets);
    expect(ac.id).to.exist;
    expect(ac.id).to.equal(preSets.id);
    expect(ac.resourceType).to.exist;
    expect(ac.resourceType).to.equal('Account');
  });
});
