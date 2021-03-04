import {R4} from '@ahryman40k/ts-fhir-types';
import {expect} from 'chai';
import {careTeamGenerator} from '../generator/fhir/r4/careteam';

describe('CareTeamGenerator', () => {
  it('correctly creates a list of 10 careteams', async () => {
    const cts = careTeamGenerator(10);
    expect(cts.length).to.equal(10);
  });

  it('correctly creates a list of 10 careteams with presets', async () => {
    const cts = careTeamGenerator(10, {
      status: 'active' as R4.CareTeamStatusKind,
    });
    expect(cts.length).to.equal(10);
    cts.forEach((ct: R4.ICareTeam) => {
      expect(ct.status).to.equal('active');
    });
  });
});
