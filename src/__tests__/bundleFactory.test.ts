import {R4} from '@imaware/ts-fhir-types';
import {expect} from 'chai';
import {bundleFactory} from '../factory/fhir/r4/bundle';
import {uuidV4Regex} from './helpers/patterns';

describe('BundleFactory', () => {
  it('correctly creates an bundle with no defaults', async () => {
    const bd = bundleFactory.build();
    expect(bd.id).to.exist;
    expect(bd.id).to.match(uuidV4Regex);
    expect(bd.resourceType).to.exist;
    expect(bd.resourceType).to.equal('Bundle');
    expect(bd.type).to.exist;
  });
  it('correctly creates an bundle with defaults', async () => {
    const preSets = {
      id: '9d5058fa-4ea5-47c9-bf62-d9b8426e4fe5',
      type: 'transaction' as R4.BundleTypeKind,
    };
    const bd = bundleFactory.build(preSets);
    expect(bd.id).to.exist;
    expect(bd.id).to.equal(preSets.id);
    expect(bd.resourceType).to.exist;
    expect(bd.resourceType).to.equal('Bundle');
    expect(bd.type).to.equal('transaction');
  });
});
