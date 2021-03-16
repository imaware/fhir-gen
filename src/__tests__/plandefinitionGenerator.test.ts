import {R4} from '@imaware/ts-fhir-types';
import {expect} from 'chai';
import {DeepPartial} from 'fishery';
import {planDefinitionGenerator} from '../generator/fhir/r4/plandefinition';

describe('PlanDefinitionGenerator', () => {
  it('correctly creates a list of 10 plandefinitions', async () => {
    const pds = planDefinitionGenerator(10);
    expect(pds.length).to.equal(10);
  });

  it('correctly creates a list of 10 plandefinitions with presets', async () => {
    const pds = planDefinitionGenerator(10, {
      status: 'active' as R4.PlanDefinitionStatusKind,
    });
    expect(pds.length).to.equal(10);
    pds.forEach((pd: R4.IPlanDefinition) => {
      expect(pd.status).to.equal('active');
    });
  });

  it('correctly creates a list of 3 plandefinitions with different presets', async () => {
    const presets = [
      {
        status: 'active' as R4.PlanDefinitionStatusKind,
      },
      {
        name: 'foo',
      },
      {
        identifier: [
          {
            value: 'ELO-123',
          },
        ],
      },
    ] as Array<DeepPartial<R4.IPlanDefinition>>;
    const pds = planDefinitionGenerator(presets.length, presets);
    expect(pds.length).to.equal(presets.length);
    pds.forEach((pd: R4.IPlanDefinition, index: number) => {
      expect(pd).to.containSubset(presets[index]);
    });
  });
});
