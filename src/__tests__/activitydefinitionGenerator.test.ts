import {R4} from '@ahryman40k/ts-fhir-types';
import * as chai from 'chai';
import {expect} from 'chai';
import * as chaiSubset from 'chai-subset';
import {DeepPartial} from 'fishery';
import {activityDefinitionGenerator} from '../generator/fhir/r4/activitydefinition';

chai.use(chaiSubset.default);

describe('ActivityDefinitionGenerator', () => {
  it('correctly creates a list of 10 activitydefinitions', async () => {
    const cts = activityDefinitionGenerator(10);
    expect(cts.length).to.equal(10);
  });

  it('correctly creates a list of 10 activitydefinitions with presets', async () => {
    const cts = activityDefinitionGenerator(10, {
      status: 'active' as R4.ActivityDefinitionStatusKind,
    });
    expect(cts.length).to.equal(10);
    cts.forEach((ct: R4.IActivityDefinition) => {
      expect(ct.status).to.equal('active');
    });
  });

  it('correctly creates a list of 3 activitydefinitions with different presets', async () => {
    const presets = [
      {
        status: 'active' as R4.ActivityDefinitionStatusKind,
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
    ] as Array<DeepPartial<R4.IActivityDefinition>>;
    const cts = activityDefinitionGenerator(presets.length, presets);
    expect(cts.length).to.equal(presets.length);
    cts.forEach((ct: R4.IActivityDefinition, index: number) => {
      expect(ct).to.containSubset(presets[index]);
    });
  });
});
