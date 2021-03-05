import {R4} from '@ahryman40k/ts-fhir-types';
import {expect} from 'chai';
import {chargeItemFactory} from '../factory/fhir/r4/chargeitem';
import {uuidV4Regex} from './helpers/patterns';

describe('ChargeItemFactory', () => {
  it('correctly creates an chargeitem with no defaults', async () => {
    const ac = chargeItemFactory.build();
    expect(ac.id).to.exist;
    expect(ac.id).to.match(uuidV4Regex);
    expect(ac.resourceType).to.exist;
    expect(ac.resourceType).to.equal('ChargeItem');
    expect(ac.status).to.exist;
  });
  it('correctly creates an chargeitem with defaults', async () => {
    const preSets = {
      id: '89cddcf5-9252-4376-844b-068d65417eda',
      status: 'billed' as R4.ChargeItemStatusKind,
    };
    const ac = chargeItemFactory.build(preSets);
    expect(ac.id).to.exist;
    expect(ac.id).to.equal(preSets.id);
    expect(ac.resourceType).to.exist;
    expect(ac.resourceType).to.equal('ChargeItem');
    expect(ac.status).to.exist;
    expect(ac.status).to.equal(preSets.status);
  });
});
