import {R4} from '@imaware/ts-fhir-types';
import {expect} from 'chai';
import {careTeamFactory} from '../factory/fhir/r4/careteam';
import {uuidV4Regex} from './helpers/patterns';

describe('CareTeamFactory', () => {
  it('correctly creates an careteam with no defaults', async () => {
    const ct = careTeamFactory.build();
    expect(ct.id).to.exist;
    expect(ct.id).to.match(uuidV4Regex);
    expect(ct.resourceType).to.exist;
    expect(ct.resourceType).to.equal('CareTeam');
    expect(ct.status).to.exist;
  });
  it('correctly creates an careteam with defaults', async () => {
    const preSets = {
      id: '9d5058fa-4ea5-47c9-bf62-d9b8426e4fe5',
      status: 'proposed' as R4.CareTeamStatusKind,
    };
    const ct = careTeamFactory.build(preSets);
    expect(ct.id).to.exist;
    expect(ct.id).to.equal(preSets.id);
    expect(ct.resourceType).to.exist;
    expect(ct.resourceType).to.equal('CareTeam');
    expect(ct.status).to.exist;
    expect(ct.status).to.equal(ct.status);
  });
});
