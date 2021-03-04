import {expect} from 'chai';
import {bundleEntryFactory} from '../factory/fhir/r4/bundleentry';
import {uuidV4Regex} from './helpers/patterns';

describe('BundleEntryFactory', () => {
  it('correctly creates an bundleentry with no defaults', async () => {
    const bd = bundleEntryFactory.build();
    expect(bd.id).to.exist;
    expect(bd.id).to.match(uuidV4Regex);
    expect(bd.request).to.exist;
    expect(bd.fullUrl).to.exist;
  });
  it('correctly creates an bundleentry with defaults', async () => {
    const preSets = {
      id: '9d5058fa-4ea5-47c9-bf62-d9b8426e4fe5',
      fullUrl: 'foo',
    };
    const bd = bundleEntryFactory.build(preSets);
    expect(bd.id).to.exist;
    expect(bd.id).to.equal(preSets.id);
    expect(bd.request).to.exist;
    expect(bd.fullUrl).to.equal(preSets.fullUrl);
  });
});
