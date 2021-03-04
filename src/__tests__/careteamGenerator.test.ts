import {R4} from '@ahryman40k/ts-fhir-types';
import {expect} from 'chai';
import {DeepPartial} from 'fishery';
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

  it('correctly creates a list of 3 careteams with different presets', async () => {
    const presets = [
      {
        status: 'active',
      },
      {
        name: 'foo',
        identifier: [
          {
            use: 'official',
            value: 'something',
            system: 'https://imaware.health/system',
          } as R4.IIdentifier,
        ] as R4.IIdentifier[],
      },
      {
        name: 'bar',
        experimental: true,
      },
    ] as Array<DeepPartial<R4.ICareTeam>>;
    const cts = careTeamGenerator(presets.length, presets);
    expect(cts.length).to.equal(presets.length);
    cts.forEach((ct: R4.ICareTeam, index: number) => {
      expect(ct).to.containSubset(presets[index]);
    });
  });
});
